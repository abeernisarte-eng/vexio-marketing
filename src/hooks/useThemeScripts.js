import { useEffect } from 'react'

let themeScriptsLoaded = false

const THEME_SCRIPTS = [
  './jquery.min.js',
  './jquery-migrate.min.js',
  './imagesloaded.min.js',
  './masonry.min.js',
  './jquery.masonry.min.js',
  './bootstrap.bundle.min.js',
  './swiper-bundle.min.js',
  './wow.js',
  './gsap.min.js',
  './SplitText.min.js',
  './appear.js',
  './magnific-popup.min.js',
  './CustomEase.min.js',
  './ScrollTrigger.min.js',
  './counterup.min.js',
  './waypoints.min.js',
  './marquee.min.js',
  './nice-select.min.js',
  './lenis.min.js',
  './feather.min.js',
  './curtains.umd.js',
  './core.js',
  './main.js',
  './main-2.js',
  './main-3.js',
]

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[data-theme-src="${src}"]`)) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.async = false
    script.dataset.themeSrc = src
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load ${src}`))
    document.body.appendChild(script)
  })
}

async function loadThemeScripts() {
  for (const src of THEME_SCRIPTS) {
    await loadScript(src)
  }

  // Theme scripts register DOMContentLoaded / window load handlers.
  // When injected after React mount those events already fired — re-trigger.
  document.dispatchEvent(new Event('DOMContentLoaded', { bubbles: true }))
  window.dispatchEvent(new Event('load'))

  if (window.jQuery) {
    window.jQuery(document).trigger('ready')
    window.jQuery(window).trigger('load')
  }

  // data-background helpers (also in theme JS, but safe to re-apply)
  if (window.jQuery) {
    window.jQuery('[data-background]').each(function applyBg() {
      const bg = window.jQuery(this).attr('data-background')
      if (bg) window.jQuery(this).css('background-image', `url(${bg})`)
    })
  }
}

/**
 * Loads original Agenriver theme vendors + main.js / main-2.js after React mounts,
 * preserving GSAP / Lenis / marquee / WOW behavior without a redesign.
 */
export function useThemeScripts() {
  useEffect(() => {
    if (themeScriptsLoaded) return
    themeScriptsLoaded = true

    let cancelled = false

    // Wait two frames so section DOM from parse() is committed
    let frames = 0
    let raf = 0
    const tick = () => {
      frames += 1
      if (frames < 2) {
        raf = window.requestAnimationFrame(tick)
        return
      }
      loadThemeScripts().catch((err) => {
        if (!cancelled) console.error(err)
      })
    }
    raf = window.requestAnimationFrame(tick)

    return () => {
      cancelled = true
      window.cancelAnimationFrame(raf)
    }
  }, [])
}
