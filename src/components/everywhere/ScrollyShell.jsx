import { useEffect, useRef, useState } from 'react'

export function FlowDot({ path, color, duration = '2s', radius = 3.5 }) {
  return (
    <circle r={radius} fill={color}>
      <animateMotion dur={duration} repeatCount="indefinite" path={path} />
    </circle>
  )
}

// Step cards on the left, a sticky diagram on the right that follows the step in the middle of the viewport
export default function ScrollyShell({ steps, renderDiagram }) {
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveStep(stepRefs.current.indexOf(entry.target))
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    stepRefs.current.forEach((element) => element && observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex max-lg:flex-col gap-10">
      {/* Small screens: the complete diagram */}
      <div className="lg:hidden overflow-x-auto">
        <div className="min-w-[600px]">{renderDiagram(steps.length - 1)}</div>
      </div>

      <div className="lg:w-2/5 max-lg:space-y-4 lg:space-y-[28vh] lg:py-[20vh]">
        {steps.map((step, index) => (
          <div
            key={step.title}
            ref={(element) => (stepRefs.current[index] = element)}
            className={`border-l-4 px-5 py-4 rounded-r-lg transition-all duration-300 ${
              activeStep === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-gray-50'
            }`}
          >
            <h3 className={`text-lg font-semibold mb-2 ${activeStep === index ? 'text-blue-900' : 'text-gray-700'}`}>{step.title}</h3>
            <p className={`text-sm leading-relaxed ${activeStep === index ? 'text-blue-800' : 'text-gray-600'}`}>{step.text}</p>
            {step.highlight && (
              <p className={`mt-2 text-sm font-semibold leading-relaxed ${activeStep === index ? 'text-blue-900' : 'text-gray-700'}`}>{step.highlight}</p>
            )}
          </div>
        ))}
      </div>

      <div className="max-lg:hidden lg:w-3/5">
        <div className="sticky top-[10vh]">{renderDiagram(activeStep)}</div>
      </div>
    </div>
  )
}
