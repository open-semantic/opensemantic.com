import { useState, useEffect, useRef } from 'react'
import { Pre, highlight } from 'codehike/code'
import { tokenTransitions } from './token-transitions'
import { focus } from './focus'

export default function ScrollyCoding({ steps, fullExample, fileName, reference }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [highlightedSteps, setHighlightedSteps] = useState([])
  const [codeSteps, setCodeSteps] = useState([])
  const stepRefs = useRef([])

  // Fetch full YAML and initialize code steps
  useEffect(() => {
    async function init() {
      const response = await fetch(fullExample.src)
      const fullYaml = await response.text()
      const allSteps = [
        ...steps,
        { id: 'full-example', title: 'Full Example', description: fullExample.description, code: fullYaml },
      ]
      setCodeSteps(allSteps)

      const highlighted = await Promise.all(
        allSteps.map((step) =>
          highlight({ value: step.code, lang: 'yaml', meta: '' }, 'github-dark')
        )
      )
      setHighlightedSteps(highlighted)
    }
    init()
  }, [steps, fullExample])

  // Intersection observer for scroll-based selection
  useEffect(() => {
    if (codeSteps.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(entry.target)
            if (index !== -1) {
              setSelectedIndex(prev => {
                if (index > prev) return prev + 1
                if (index < prev) return prev - 1
                return prev
              })
            }
          }
        })
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0
      }
    )

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [codeSteps])

  if (codeSteps.length === 0) {
    return <div className="flex gap-8 min-h-[600px]" />
  }

  return (
    <div className="flex gap-8">
      {/* Left side: Scrollable content */}
      <div className="w-1/2 space-y-4">
        <div className="h-[10vh]" />

        {codeSteps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => (stepRefs.current[index] = el)}
            data-selected={selectedIndex === index}
            className={`
              border-l-4 px-5 py-4 rounded-r-lg transition-all duration-300 cursor-pointer
              ${selectedIndex === index
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100'
              }
            `}
            onClick={() => setSelectedIndex(index)}
          >
            <h3 className={`text-lg font-semibold mb-2 ${
              selectedIndex === index ? 'text-blue-900' : 'text-gray-700'
            }`}>
              {step.title}
            </h3>
            <p className={`text-sm leading-relaxed ${
              selectedIndex === index ? 'text-blue-800' : 'text-gray-600'
            }`}>
              {step.description}
            </p>
          </div>
        ))}
          <p className="prose prose-sm ">
              Reference: <a href={reference.href}>{reference.label}</a>
          </p>

        <div className="h-[10vh]" />
      </div>

      {/* Right side: Sticky code panel */}
      <div className="w-1/2">
        <div className="sticky top-20 max-h-[80vh] overflow-auto rounded-lg bg-[#0d1117] shadow-xl">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-700">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-gray-400 text-xs ml-2">{codeSteps[selectedIndex].fileName ?? fileName}</span>
          </div>
          <div className="p-4 text-sm min-w-[500px]">
            {highlightedSteps[selectedIndex] ? (
              <Pre
                code={highlightedSteps[selectedIndex]}
                handlers={[tokenTransitions, focus]}
                className="!bg-transparent !p-0 min-h-[24rem]"
              />
            ) : (
              <pre className="text-gray-300 font-mono text-sm whitespace-pre min-h-[24rem]">
                {codeSteps[selectedIndex].code}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
