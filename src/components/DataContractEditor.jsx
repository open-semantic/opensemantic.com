import { useEffect, useRef, useState } from 'react'
import { init } from 'datacontract-editor/dist/datacontract-editor.es.js'
import 'datacontract-editor/dist/datacontract-editor.css'

export default function DataContractEditor({ yaml, initialView = 'form', height = '800px' }) {
  const containerRef = useRef(null)
  const editorRef = useRef(null)
  const [defaultYaml, setDefaultYaml] = useState(null)

  useEffect(() => {
    if (!yaml) {
      fetch('/orders.odcs.yaml')
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
          a.download = 'orders.odcs.yaml'
          a.click()
          URL.revokeObjectURL(url)
        },
        showPreview: false,
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
      className="datacontract-editor-container"
    />
  )
}
