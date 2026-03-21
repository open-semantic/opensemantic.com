import { useEffect, useRef, useState } from 'react'
import { init } from 'opensemantic-editor/dist/opensemantic-editor.es.js'
import 'opensemantic-editor/dist/opensemantic-editor.css'

export default function OpenSemanticEditor({ yaml, initialView = 'diagram', height = '800px' }) {
  const containerRef = useRef(null)
  const editorRef = useRef(null)
  const [defaultYaml, setDefaultYaml] = useState(null)

  useEffect(() => {
    if (!yaml) {
      fetch('/semantic_model.yaml')
        .then(res => res.text())
        .then(setDefaultYaml)
    }
  }, [yaml])

  const yamlContent = yaml || defaultYaml

  useEffect(() => {
    if (containerRef.current && !editorRef.current && yamlContent) {
      editorRef.current = init({
        container: containerRef.current,
        mode: 'SERVER',
        yaml: yamlContent,
        initialView,
        onSave: (content) => {
          const blob = new Blob([content], { type: 'application/x-yaml' })
          const url = URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = 'semantic_model.yaml'
          a.click()
          URL.revokeObjectURL(url)
        },
        showPreview: false,
        enablePersistence: false,
      })
    }

    return () => {
      editorRef.current = null
    }
  }, [yamlContent, initialView])

  return (
    <div
      ref={containerRef}
      style={{ height, width: '100%' }}
      className="opensemantic-editor-container"
    />
  )
}
