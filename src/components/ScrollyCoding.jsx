import { useState, useEffect, useRef } from 'react'
import { Pre, highlight } from 'codehike/code'
import { tokenTransitions } from './token-transitions'
import { focus } from './focus'

const getCodeSteps = (fullYaml) => [
  {
    id: 'model',
    title: 'Semantic Model',
    description: 'Every OSI model starts with a version and semantic model definition: a name, description, and optional AI context that helps AI agents understand and query the data correctly.',
    code: `# !focus(1:17)
version: "0.1.1"
semantic_model:
  - name: ecommerce
    description: E-commerce analytics semantic model
    ai_context:
      instructions: >
        Use this model for e-commerce analytics.
        Revenue is always in cents.
        Active customers have placed an order in the last 90 days.
      synonyms:
        - "revenue: total_revenue, sales, income"
        - "customers: buyers, users, shoppers"
      examples:
        - "What was the total revenue last month?"
        - "How many active customers do we have?"
        - "Show me the top 10 products by revenue"`
  },
  {
    id: 'datasets',
    title: 'Datasets',
    description: 'Datasets represent logical tables (fact or dimension tables). Each dataset has a source, primary key, and fields. Fields require multi-dialect expressions and can be marked as dimensions.',
    code: `version: "0.1.1"
semantic_model:
  - name: ecommerce
    description: E-commerce analytics semantic model
# !focus(1:28)
    datasets:
      - name: orders
        description: All customer orders
        source: analytics.orders
        primary_key:
          - order_id
        fields:
          - name: order_id
            description: Unique order identifier
            expression:
              dialects:
                - dialect: ANSI_SQL
                  expression: order_id
          - name: customer_id
            description: Customer identifier
            expression:
              dialects:
                - dialect: ANSI_SQL
                  expression: customer_id
            dimension: {}
          - name: order_total
            description: Total order amount in cents
            expression:
              dialects:
                - dialect: ANSI_SQL
                  expression: order_total
                - dialect: SNOWFLAKE
                  expression: ORDER_TOTAL`
  },
  {
    id: 'relationships',
    title: 'Relationships',
    description: 'Relationships define foreign key connections between datasets. They specify the "from" (many side) and "to" (one side) datasets along with the join columns, enabling tools to automatically join tables.',
    code: `version: "0.1.1"
semantic_model:
  - name: ecommerce
    datasets:
      - name: orders
        source: analytics.orders
        primary_key:
          - order_id
        fields:
          - name: customer_id
            expression:
              dialects:
                - dialect: ANSI_SQL
                  expression: customer_id
      - name: customers
        source: analytics.customers
        primary_key:
          - customer_id
        fields:
          - name: customer_id
            expression:
              dialects:
                - dialect: ANSI_SQL
                  expression: customer_id
# !focus(1:8)
    relationships:
      - name: orders_to_customers
        from: orders
        to: customers
        from_columns:
          - customer_id
        to_columns:
          - customer_id`
  },
  {
    id: 'metrics',
    title: 'Metrics',
    description: 'Metrics are aggregate business measures defined centrally. Each metric has multi-dialect expressions, ensuring consistent metric definitions across all tools — no more conflicting "revenue" numbers.',
    code: `version: "0.1.1"
semantic_model:
  - name: ecommerce
    datasets:
      - name: orders
        source: analytics.orders
        fields:
          - name: order_total
            expression:
              dialects:
                - dialect: ANSI_SQL
                  expression: order_total
# !focus(1:14)
    metrics:
      - name: total_revenue
        description: Total order revenue in cents
        expression:
          dialects:
            - dialect: ANSI_SQL
              expression: SUM(order_total)
            - dialect: SNOWFLAKE
              expression: SUM(ORDER_TOTAL)
      - name: order_count
        description: Total number of orders
        expression:
          dialects:
            - dialect: ANSI_SQL
              expression: COUNT(*)`
  },
  {
    id: 'extensions',
    title: 'Custom Extensions',
    description: 'Custom extensions allow vendor-specific metadata without polluting the core model. Each extension targets a specific vendor (Snowflake, Databricks, dbt, etc.) and stores configuration as a JSON string.',
    code: `version: "0.1.1"
semantic_model:
  - name: ecommerce
    datasets:
      - name: orders
        source: analytics.orders
    metrics:
      - name: total_revenue
        expression:
          dialects:
            - dialect: ANSI_SQL
              expression: SUM(order_total)
# !focus(1:5)
    custom_extensions:
      - vendor_name: SNOWFLAKE
        data: "{\\"warehouse\\": \\"ANALYTICS_WH\\", \\"role\\": \\"ANALYST\\"}"
      - vendor_name: DATABRICKS
        data: "{\\"catalog\\": \\"main\\", \\"schema\\": \\"analytics\\"}"`
  },
  {
    id: 'full-example',
    title: 'Full Example',
    description: 'Here is a complete OSI semantic model bringing all elements together: model definition with AI context, datasets with typed fields and multi-dialect expressions, relationships, metrics, and vendor-specific extensions.',
    code: fullYaml
  }
]

export default function ScrollyCoding() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [highlightedSteps, setHighlightedSteps] = useState([])
  const [codeSteps, setCodeSteps] = useState([])
  const stepRefs = useRef([])

  // Fetch full YAML and initialize code steps
  useEffect(() => {
    async function init() {
      const response = await fetch('/semantic_model.yaml')
      const fullYaml = await response.text()
      const steps = getCodeSteps(fullYaml)
      setCodeSteps(steps)

      const highlighted = await Promise.all(
        steps.map((step) =>
          highlight({ value: step.code, lang: 'yaml', meta: '' }, 'github-dark')
        )
      )
      setHighlightedSteps(highlighted)
    }
    init()
  }, [])

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
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100'
              }
            `}
            onClick={() => setSelectedIndex(index)}
          >
            <h3 className={`text-lg font-semibold mb-2 ${
              selectedIndex === index ? 'text-emerald-900' : 'text-gray-700'
            }`}>
              {step.title}
            </h3>
            <p className={`text-sm leading-relaxed ${
              selectedIndex === index ? 'text-emerald-800' : 'text-gray-600'
            }`}>
              {step.description}
            </p>
          </div>
        ))}
          <p className="prose prose-sm ">
              Reference: <a href="https://github.com/open-semantic-interchange/OSI/blob/main/core-spec/spec.md">OSI Specification</a>
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
            <span className="text-gray-400 text-xs ml-2">ecommerce.osi.yaml</span>
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
