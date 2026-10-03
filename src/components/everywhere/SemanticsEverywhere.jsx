import { SparklesIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline'
import { knowledgeSources, platforms, sameNumber, semanticChips, storySteps } from '../../content/everywhere'
import ScrollyShell, { FlowDot } from './ScrollyShell'
import { chipColors, fadeIn } from './diagram'

function Intro() {
  return (
    <div className="prose max-w-none">
      <h2>Distributing Semantic Data</h2>
      <p>
        Semantic data does not live in a single platform. Business definitions need to be integrated into every
        relevant app, data platform, and AI platform. That is the key to consistency: all platforms share the same
        semantics, work on the same linked data products, and return the same numbers.
      </p>
      <p>
        The ontology is curated by domain experts, the people who know what a customer, an order, or a return
        means in your business.
      </p>
    </div>
  )
}

// Three horizontal layers: people and agents on top, semantics in the middle, platforms at the bottom
const SOURCE = { x: 16, width: 140, height: 26, ys: [30, 62, 94, 126] }
const AGENT = { x: 214, y: 48, width: 140, height: 84 }
const EXPERT = { cx: 560, cy: 90, r: 26 }
const BAND = { x: 16, y: 210, width: 768, height: 76 }
const PLATFORM = { xs: [16, 280, 544], y: 392, width: 240, height: 96 }

// Business value happens where business users work
function BusinessUsers({ step }) {
  const bottom = PLATFORM.y + PLATFORM.height
  return (
    <g style={fadeIn(step, 1)}>
      {platforms.map((platform, index) => {
        const cx = PLATFORM.xs[index] + PLATFORM.width / 2
        return (
          <g key={platform.id}>
            <path d={`M${cx} ${bottom} L${cx} ${bottom + 30}`} stroke="#93c5fd" strokeWidth="1.5" />
            {[-34, 0, 34].map((dx) => (
              <g key={dx}>
                <circle cx={cx + dx} cy={bottom + 48} r="16" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
                <UserIcon x={cx + dx - 9} y={bottom + 39} width="18" height="18" color="#1d4ed8" />
              </g>
            ))}
            <text x={cx} y={bottom + 86} textAnchor="middle" fontSize="12" fill="#374151">{platform.users}</text>
          </g>
        )
      })}
      <text x="400" y={bottom + 120} textAnchor="middle" fontSize="13" fontWeight="600" fill="#1d4ed8">
        Business value happens where business users work
      </text>
    </g>
  )
}

function Diagram({ step }) {
  const agentCenterY = AGENT.y + AGENT.height / 2
  const agentRight = AGENT.x + AGENT.width
  const expertLeft = EXPERT.cx - EXPERT.r
  const curatesPath = `M${EXPERT.cx} ${EXPERT.cy + EXPERT.r} L${EXPERT.cx} ${BAND.y}`
  const proposalsPath = `M${agentRight} ${EXPERT.cy - 12} L${expertLeft - 2} ${EXPERT.cy - 12}`
  const feedbackPath = `M${expertLeft} ${EXPERT.cy + 14} L${agentRight + 2} ${EXPERT.cy + 14}`

  return (
    <svg viewBox="0 0 800 620" className="w-full h-auto" role="img"
         aria-label="Domain experts curate the semantics layer, which feeds apps, data platforms, and AI platforms at the bottom. A semantic agent reads knowledge bases and sends proposals to the domain experts.">
      <defs>
        <marker id="layers-arrow-dark" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#111827" />
        </marker>
        <marker id="layers-arrow-fuchsia" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#c026d3" />
        </marker>
        <marker id="layers-arrow-gray" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#9ca3af" />
        </marker>
      </defs>

      {/* Experts curate the semantics */}
      <path d={curatesPath} fill="none" stroke="#111827" strokeWidth="2" markerEnd="url(#layers-arrow-dark)" />
      {step >= 4 && <FlowDot path={curatesPath} color="#111827" duration="1.6s" />}
      <text x={EXPERT.cx + 10} y="168" fontSize="12" fill="#374151">curate</text>

      {/* Semantics down to the platforms */}
      <g style={fadeIn(step, 1)}>
        {PLATFORM.xs.map((x) => {
          const cx = x + PLATFORM.width / 2
          const path = `M${cx} ${BAND.y + BAND.height} L${cx} ${PLATFORM.y}`
          return (
            <g key={x}>
              <path d={path} fill="none" stroke="#cbd5e1" strokeWidth="2" />
              {step >= 1 && <FlowDot path={path} color="#2563eb" duration="1.4s" />}
            </g>
          )
        })}
      </g>

      {/* Knowledge bases to agent, proposals to expert */}
      <g style={fadeIn(step, 3)}>
        {SOURCE.ys.map((y) => {
          const cy = y + SOURCE.height / 2
          const path = `M${SOURCE.x + SOURCE.width} ${cy} C 186 ${cy}, 186 ${agentCenterY}, ${AGENT.x} ${agentCenterY}`
          return (
            <g key={y}>
              <path d={path} fill="none" stroke="#f0abfc" strokeWidth="2" />
              {step >= 3 && <FlowDot path={path} color="#c026d3" duration="2.4s" />}
            </g>
          )
        })}
      </g>
      <g style={fadeIn(step, 4)}>
        <path d={proposalsPath} fill="none" stroke="#c026d3" strokeWidth="2" markerEnd="url(#layers-arrow-fuchsia)" />
        {step >= 4 && <FlowDot path={proposalsPath} color="#c026d3" duration="1.8s" />}
        <text x={(agentRight + expertLeft) / 2} y={EXPERT.cy - 22} textAnchor="middle" fontSize="12" fontWeight="600" fill="#a21caf">proposals</text>
        <path d={feedbackPath} fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="5 5" markerEnd="url(#layers-arrow-gray)" />
        <text x={(agentRight + expertLeft) / 2} y={EXPERT.cy + 34} textAnchor="middle" fontSize="12" fill="#6b7280">feedback</text>
      </g>

      {/* Domain experts */}
      <circle cx={EXPERT.cx} cy={EXPERT.cy} r={EXPERT.r} fill="#111827" />
      <UserGroupIcon x={EXPERT.cx - 13} y={EXPERT.cy - 13} width="26" height="26" color="#fff" />
      <text x={EXPERT.cx + EXPERT.r + 12} y={EXPERT.cy + 5} fontSize="14" fontWeight="600" fill="#111827">Domain experts</text>

      {/* Semantics layer */}
      <rect x={BAND.x} y={BAND.y} width={BAND.width} height={BAND.height} rx="14" fill="#fff" stroke="#d1d5db" strokeWidth="1.5" />
      <text x={BAND.x + 22} y={BAND.y + 43} fontSize="15" fontWeight="600" fill="#111827">Semantics</text>
      {semanticChips.map((chip, index) => {
        const colors = chipColors[chip.color]
        const x = 220 + index * 186
        return (
          <g key={chip.label}>
            <rect x={x} y={BAND.y + 21} width="174" height="34" rx="17" fill={colors.fill} stroke={colors.stroke} />
            <text x={x + 87} y={BAND.y + 42.5} textAnchor="middle" fontSize="13" fontWeight="500" fill={colors.text}>{chip.label}</text>
          </g>
        )
      })}

      {/* Platforms */}
      <g style={fadeIn(step, 1)}>
        {platforms.map((platform, index) => {
          const x = PLATFORM.xs[index]
          const Icon = platform.icon
          return (
            <g key={platform.id}>
              <rect x={x} y={PLATFORM.y} width={PLATFORM.width} height={PLATFORM.height} rx="12" fill="#fff" stroke="#d1d5db" strokeWidth="1.5" />
              <Icon x={x + 14} y={PLATFORM.y + 13} width="20" height="20" color="#374151" />
              <text x={x + 42} y={PLATFORM.y + 29} fontSize="14" fontWeight="600" fill="#111827">{platform.label}</text>
              <text x={x + 14} y={PLATFORM.y + 52} fontSize="11.5" fill="#6b7280">{platform.examples}</text>
              <g style={fadeIn(step, 2)}>
                <rect x={x + 14} y={PLATFORM.y + 62} width={PLATFORM.width - 28} height="24" rx="6" fill="#ecfdf5" stroke="#a7f3d0" />
                <text x={x + 24} y={PLATFORM.y + 78} fontSize="11.5" fill="#065f46">{sameNumber.question}</text>
                <text x={x + PLATFORM.width - 24} y={PLATFORM.y + 78} textAnchor="end" fontSize="12" fontWeight="700" fill="#065f46">{sameNumber.value}</text>
              </g>
            </g>
          )
        })}
      </g>

      <BusinessUsers step={step} />

      {/* Semantic agent and knowledge bases */}
      <g style={fadeIn(step, 3)}>
        <text x={SOURCE.x} y={SOURCE.ys[0] - 10} fontSize="12" fontWeight="600" fill="#86198f">Knowledge bases</text>
        {knowledgeSources.map((source, index) => {
          const y = SOURCE.ys[index]
          const Icon = source.icon
          return (
            <g key={source.id}>
              <rect x={SOURCE.x} y={y} width={SOURCE.width} height={SOURCE.height} rx="8" fill="#fff" stroke="#e5e7eb" strokeWidth="1.5" />
              <Icon x={SOURCE.x + 9} y={y + 6} width="14" height="14" color="#a21caf" />
              <text x={SOURCE.x + 30} y={y + 17.5} fontSize="11.5" fontWeight="500" fill="#111827">{source.label}</text>
            </g>
          )
        })}
        <rect x={AGENT.x} y={AGENT.y} width={AGENT.width} height={AGENT.height} rx="14" fill="#fdf4ff" stroke="#e879f9" strokeWidth="1.5" />
        <SparklesIcon x={AGENT.x + AGENT.width / 2 - 11} y={AGENT.y + 14} width="22" height="22" color="#c026d3" />
        <text x={AGENT.x + AGENT.width / 2} y={AGENT.y + 56} textAnchor="middle" fontSize="12.5" fontWeight="600" fill="#86198f">Semantic agent</text>
        <text x={AGENT.x + AGENT.width / 2} y={AGENT.y + 72} textAnchor="middle" fontSize="10" fill="#a21caf">runs in a loop</text>
      </g>
    </svg>
  )
}

export default function SemanticsEverywhere() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Intro />
      </div>
      <ScrollyShell steps={storySteps} renderDiagram={(step) => <Diagram step={step} />} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-r-lg border-l-4 border-amber-500 bg-amber-50 px-5 py-4">
          <p className="font-semibold text-amber-900">Avoid semantic vendor lock-in</p>
          <p className="mt-2 text-sm leading-relaxed text-amber-900">
            Many platforms offer their own semantic layer. Definitions authored there live in a proprietary format:
            they have to be rebuilt for every other platform, and again when you replace the tool. Keep the source of
            truth in open formats such as <a href="#ossie" className="underline">Apache Ossie</a> and{' '}
            <a href="#data-products" className="underline">ODCS</a>, owned and versioned by your organization, and let
            each platform consume it.
          </p>
        </div>
      </div>
    </div>
  )
}
