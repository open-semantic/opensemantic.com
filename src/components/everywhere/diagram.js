// Fades an SVG group in once the scroll story reaches the given step
export const fadeIn = (step, from) => ({ opacity: step >= from ? 1 : 0, transition: 'opacity 600ms ease' })

export const chipColors = {
  violet: { fill: '#f5f3ff', stroke: '#c4b5fd', text: '#6d28d9' },
  blue: { fill: '#eff6ff', stroke: '#93c5fd', text: '#1d4ed8' },
  emerald: { fill: '#ecfdf5', stroke: '#6ee7b7', text: '#047857' },
}
