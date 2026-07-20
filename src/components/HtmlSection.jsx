import parse from 'html-react-parser'

/**
 * Renders a cleaned theme HTML fragment as React nodes.
 * Keeps original markup/classes so Agenriver CSS + GSAP selectors still match.
 */
export default function HtmlSection({ html, className }) {
  const content = parse(html)
  if (!className) return <>{content}</>
  return <div className={className}>{content}</div>
}
