import { useEffect, useRef } from 'react'
import { parse } from 'yaml'
import { ontologyToGraph } from '../content/ontologyGraph'

// Prebuilt bundle of https://github.com/entropy-data/semantic-visualizer, served from public/
const VISUALIZER_SCRIPT = '/semantic-visualizer/index.js'
const VISUALIZER_STYLESHEET = '/semantic-visualizer/index.css'

function loadStylesheet(href) {
  if (document.querySelector(`link[href="${href}"]`)) return
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}

export default function OntologyDiagram({ src, height = '560px' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    loadStylesheet(VISUALIZER_STYLESHEET)

    Promise.all([
      fetch(src).then((res) => res.text()),
      // An absolute URL, so the Vite dev server serves the file from public/ as is
      import(/* @vite-ignore */ new URL(VISUALIZER_SCRIPT, window.location.origin).href),
    ]).then(([yaml, { init }]) => {
      if (cancelled || !containerRef.current) return
      init({
        container: containerRef.current,
        graphData: ontologyToGraph(parse(yaml)),
        height,
        locale: 'en',
        storageKey: `opensemantic-ontology-diagram:${src}`,
      })
    })

    return () => {
      cancelled = true
    }
  }, [src, height])

  return <div ref={containerRef} style={{ height }} />
}
