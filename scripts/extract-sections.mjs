/**
 * Extracts cleaned section HTML from the saved WordPress page into React components.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as cheerio from 'cheerio'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const htmlPath = path.join(root, 'index.static.html')
const outDir = path.join(root, 'src', 'content')
const componentsDir = path.join(root, 'src', 'components')

fs.mkdirSync(outDir, { recursive: true })
fs.mkdirSync(componentsDir, { recursive: true })

const raw = fs.readFileSync(htmlPath, 'utf8')
const $ = cheerio.load(raw, { decodeEntities: false })

function unwrapPinSpacers($ctx) {
  $ctx.find('.pin-spacer').each((_, el) => {
    const $el = $(el)
    $el.replaceWith($el.contents())
  })
}

function flattenSplitText($ctx) {
  // Rebuild headings that were character-split by SplitText
  $ctx.find('.agn-h3-ani-title, .agn-split-4, .agn-split-1, .agn-split-2, .agn-split-3').each((_, el) => {
    const $el = $(el)
    if (!$el.find('.split-line, .split-word, .split-char, [style*="inline-block"]').length) return
    const text = $el.text().replace(/\s+/g, ' ').trim()
    $el.empty().text(text)
    $el.removeAttr('style')
  })
}

function scrubGsapInlineStyles($ctx) {
  $ctx.find('[style]').each((_, el) => {
    const $el = $(el)
    let style = $el.attr('style') || ''

    // Keep background-image and intentional layout; strip GSAP runtime props
    const keepBg = style.match(/background-image:\s*url\([^)]+\)/i)?.[0]
    const keepPerspective = /perspective\s*:/i.test(style) ? null : null

    const isPinnedTarget =
      $el.hasClass('agn-hero-3-bg') ||
      $el.hasClass('agn-gallery-3-color') ||
      $el.hasClass('sticky-item') ||
      $el.hasClass('agn-hero-3-animation') ||
      $el.hasClass('agn-services-3-card-single')

    if (isPinnedTarget) {
      // Reset to clean CSS-driven state; preserve background-image if present
      if (keepBg) $el.attr('style', keepBg)
      else $el.removeAttr('style')
      return
    }

    style = style
      .replace(/translate:\s*[^;]+;?\s*/gi, '')
      .replace(/rotate:\s*[^;]+;?\s*/gi, '')
      .replace(/scale:\s*[^;]+;?\s*/gi, '')
      .replace(/transform:\s*[^;]+;?\s*/gi, '')
      .replace(/transform-origin:\s*[^;]+;?\s*/gi, '')
      .replace(/opacity:\s*0;?\s*/gi, '')
      .replace(/opacity:\s*1;?\s*/gi, '')
      .replace(/left:\s*[^;]+;?\s*/gi, '')
      .replace(/top:\s*[^;]+;?\s*/gi, '')
      .replace(/inset:\s*[^;]+;?\s*/gi, '')
      .replace(/margin:\s*0px;?\s*/gi, '')
      .replace(/max-width:\s*\d+(\.\d+)?px;?\s*/gi, '')
      .replace(/max-height:\s*\d+(\.\d+)?px;?\s*/gi, '')
      .replace(/width:\s*\d+(\.\d+)?px;?\s*/gi, '')
      .replace(/height:\s*\d+(\.\d+)?px;?\s*/gi, '')
      .replace(/padding:\s*0px(?:\s+0px)*;?\s*/gi, '')
      .replace(/position:\s*(fixed|absolute);?\s*/gi, '')
      .replace(/box-sizing:\s*border-box;?\s*/gi, '')
      .replace(/perspective:\s*[^;]+;?\s*/gi, '')
      .replace(/;\s*;+/g, ';')
      .trim()
      .replace(/^;|;$/g, '')

    if (keepPerspective) {
      // no-op
    }

    if (!style) $el.removeAttr('style')
    else $el.attr('style', style)
  })
}

function fixAssetPaths($ctx) {
  $ctx.find('[src], [href], [data-background]').each((_, el) => {
    const $el = $(el)
    for (const attr of ['src', 'href', 'data-background']) {
      const val = $el.attr(attr)
      if (!val) continue
      // Keep relative ./ paths for Vite base: './' (GitHub Pages)
      if (val.startsWith('/') && !val.startsWith('//') && !val.startsWith('/http')) {
        $el.attr(attr, `.${val}`)
      }
    }
  })
}

function clean($node) {
  unwrapPinSpacers($node)
  flattenSplitText($node)
  scrubGsapInlineStyles($node)
  fixAssetPaths($node)
  return $node
}

const $page = $('#page')
const sections = []

function push(name, $node) {
  if (!$node || !$node.length) {
    console.warn(`Missing: ${name}`)
    return
  }
  clean($node)
  const html = $.html($node)
  sections.push({ name, html })
  console.log(`OK ${name} (${html.length} chars)`)
}

function topSectionById(id) {
  return $page.find(`section.elementor-top-section#${id}`).first()
}

function topSectionByInner(selector) {
  const $inner = $page.find(selector).first()
  if (!$inner.length) return $()
  const $top = $inner.closest('section.elementor-top-section')
  return $top.length ? $top : $inner
}

// Preloader — reset for re-animation
const $loader = $page.find('.agn-loader-wrap').first().clone()
$loader.removeClass('preloaded').removeAttr('style')
$loader.find('.load-text').removeAttr('style')
push('Preloader', $loader)

push('BackToTop', $page.find('.agn-back-to-top').first().clone())
push('Header', $page.find('.elementor-6186').first().clone())
push('Hero', topSectionById('home').clone())
push('About', topSectionById('about').clone())
push('Services', topSectionById('service').clone())
push('WhyChoose', topSectionByInner('.agn-choose-3-feature').clone())
push('Gallery', topSectionByInner('.agn-gallery-3-area').clone())
push('Projects', topSectionById('project').clone())
push('Brands', topSectionByInner('.agn-brand-3-wrap').clone())
push('Awards', topSectionByInner('.agn-award-3-card').clone())
push('Team', topSectionByInner('.agn-team-3-wrap').clone())
push('FAQ', topSectionById('contact').clone())
push('Blog', topSectionById('blog').clone())
// Footer lives outside #page in the saved markup
push('Footer', $('.elementor-4476').first().clone())

for (const { name, html } of sections) {
  fs.writeFileSync(path.join(outDir, `${name}.html`), html, 'utf8')
  fs.writeFileSync(
    path.join(componentsDir, `${name}.jsx`),
    `import parse from 'html-react-parser'

import html from '../content/${name}.html?raw'

export default function ${name}() {
  return <>{parse(html)}</>
}
`,
    'utf8',
  )
}

fs.writeFileSync(
  path.join(outDir, 'sections.json'),
  JSON.stringify(
    sections.map((s) => s.name),
    null,
    2,
  ),
  'utf8',
)

console.log(`\nExtracted ${sections.length} sections`)
