import { useState } from 'react'
import { ArrowTrendingUpIcon, CalendarIcon } from '@heroicons/react/24/outline'

// Example figures for the ecommerce semantic model, last month is September 2026
const monthlyRevenue = [
  { month: 'Oct', label: 'Oct 2025', value: 0.92 },
  { month: 'Nov', label: 'Nov 2025', value: 1.05 },
  { month: 'Dec', label: 'Dec 2025', value: 1.31 },
  { month: 'Jan', label: 'Jan 2026', value: 0.88 },
  { month: 'Feb', label: 'Feb 2026', value: 0.9 },
  { month: 'Mar', label: 'Mar 2026', value: 0.97 },
  { month: 'Apr', label: 'Apr 2026', value: 1.01 },
  { month: 'May', label: 'May 2026', value: 1.06 },
  { month: 'Jun', label: 'Jun 2026', value: 1.1 },
  { month: 'Jul', label: 'Jul 2026', value: 1.08 },
  { month: 'Aug', label: 'Aug 2026', value: 1.19 },
  { month: 'Sep', label: 'Sep 2026', value: 1.24 },
]

const revenueByRegion = [
  { region: 'Europe', value: 0.52 },
  { region: 'North America', value: 0.41 },
  { region: 'Asia Pacific', value: 0.21 },
  { region: 'Latin America', value: 0.1 },
]

const kpis = [
  { label: 'Total revenue', value: '1.24M', delta: '+4.2% vs Aug' },
  { label: 'Order count', value: '9,830', delta: '+3.7% vs Aug' },
  { label: 'Avg order value', value: '126', delta: '+0.5% vs Aug' },
]

const modelFields = {
  metrics: [
    { name: 'Total revenue', inUse: true },
    { name: 'Order count', inUse: true },
    { name: 'Avg order value', inUse: true },
  ],
  dimensions: [
    { name: 'Order date', type: 'date', inUse: true },
    { name: 'Region', inUse: true },
    { name: 'Order status' },
    { name: 'Full name' },
  ],
}

const COLORS = {
  accent: '#2563eb',
  context: '#93c5fd',
  grid: '#e5e7eb',
  ink: '#111827',
  muted: '#6b7280',
}

// Column with a 4px rounded data end and a square baseline
function columnPath(x, y, width, height, radius = 4) {
  const r = Math.min(radius, height)
  return `M${x} ${y + height} V${y + r} Q${x} ${y} ${x + r} ${y} H${x + width - r} Q${x + width} ${y} ${x + width} ${y + r} V${y + height} Z`
}

function barPath(x, y, width, height, radius = 4) {
  const r = Math.min(radius, width)
  return `M${x} ${y} H${x + width - r} Q${x + width} ${y} ${x + width} ${y + r} V${y + height - r} Q${x + width} ${y + height} ${x + width - r} ${y + height} H${x} Z`
}

function RevenueByMonth() {
  const [hovered, setHovered] = useState(null)
  const plot = { left: 36, right: 392, top: 24, bottom: 178 }
  const max = 1.5
  const band = (plot.right - plot.left) / monthlyRevenue.length
  const barWidth = 18
  const y = (value) => plot.bottom - (value / max) * (plot.bottom - plot.top)
  const last = monthlyRevenue.length - 1

  return (
    <svg viewBox="0 0 400 202" className="w-full h-auto" role="img"
         aria-label="Revenue by month from October 2025 to September 2026, rising from 0.92 million to 1.24 million, with a December peak of 1.31 million.">
      {[0, 0.5, 1, 1.5].map((tick) => (
        <g key={tick}>
          <line x1={plot.left} x2={plot.right} y1={y(tick)} y2={y(tick)} stroke={COLORS.grid} strokeWidth="1" />
          <text x={plot.left - 8} y={y(tick) + 4} textAnchor="end" fontSize="11" fill={COLORS.muted}>{tick === 0 ? '0' : `${tick.toFixed(1)}M`}</text>
        </g>
      ))}
      {monthlyRevenue.map((entry, index) => {
        const x = plot.left + index * band + (band - barWidth) / 2
        const top = y(entry.value)
        const highlighted = hovered === index
        return (
          <g key={entry.month}>
            <path d={columnPath(x, top, barWidth, plot.bottom - top)}
                  fill={index === last || highlighted ? COLORS.accent : COLORS.context} />
            <text x={x + barWidth / 2} y="196" textAnchor="middle" fontSize="10.5" fill={COLORS.muted}>{entry.month}</text>
            <rect x={plot.left + index * band} y={plot.top} width={band} height={plot.bottom - plot.top} fill="transparent"
                  onMouseEnter={() => setHovered(index)} onMouseLeave={() => setHovered(null)} />
          </g>
        )
      })}
      {hovered === null && (
        <text x={plot.left + last * band + band / 2} y={y(monthlyRevenue[last].value) - 7} textAnchor="middle"
              fontSize="11" fontWeight="600" fill={COLORS.ink}>1.24M</text>
      )}
      {hovered !== null && (() => {
        const entry = monthlyRevenue[hovered]
        const cx = Math.min(Math.max(plot.left + hovered * band + band / 2, plot.left + 46), plot.right - 46)
        const top = y(entry.value) - 34
        return (
          <g pointerEvents="none">
            <rect x={cx - 46} y={top} width="92" height="26" rx="6" fill={COLORS.ink} />
            <text x={cx} y={top + 17} textAnchor="middle" fontSize="11" fill="#fff">{entry.label} · {entry.value.toFixed(2)}M</text>
          </g>
        )
      })()}
    </svg>
  )
}

function RevenueByRegion() {
  const [hovered, setHovered] = useState(null)
  const plot = { left: 96, right: 210 }
  const max = 0.6
  const rowHeight = 36
  const barHeight = 18

  return (
    <svg viewBox="0 0 256 150" className="w-full h-auto" role="img"
         aria-label="Revenue last month by region: Europe 0.52 million, North America 0.41 million, Asia Pacific 0.21 million, Latin America 0.10 million.">
      <line x1={plot.left} x2={plot.left} y1="4" y2={revenueByRegion.length * rowHeight + 4} stroke={COLORS.grid} strokeWidth="1" />
      {revenueByRegion.map((entry, index) => {
        const top = 14 + index * rowHeight
        const width = (entry.value / max) * (plot.right - plot.left)
        return (
          <g key={entry.region} onMouseEnter={() => setHovered(index)} onMouseLeave={() => setHovered(null)}>
            <rect x="0" y={top - 9} width="256" height={rowHeight} fill="transparent" />
            <text x={plot.left - 8} y={top + 13} textAnchor="end" fontSize="11.5" fill={hovered === index ? COLORS.ink : '#374151'}>{entry.region}</text>
            <path d={barPath(plot.left, top, width, barHeight)} fill={hovered === index ? COLORS.accent : '#3b82f6'} />
            <text x={plot.left + width + 6} y={top + 13} fontSize="11.5" fontWeight="600" fill={COLORS.ink}>{entry.value.toFixed(2)}M</text>
          </g>
        )
      })}
    </svg>
  )
}

function FieldBadge({ kind }) {
  if (kind === 'metric') {
    return <span className="flex h-5 w-5 items-center justify-center rounded bg-blue-100 text-xs font-semibold text-blue-700">Σ</span>
  }
  if (kind === 'date') {
    return <span className="flex h-5 w-5 items-center justify-center rounded bg-gray-200 text-gray-600"><CalendarIcon className="h-3.5 w-3.5" /></span>
  }
  return <span className="flex h-5 w-5 items-center justify-center rounded bg-gray-200 text-[10px] font-semibold text-gray-600">Abc</span>
}

function FieldList({ title, fields, kind }) {
  return (
    <div>
      <div className="text-xs font-medium uppercase tracking-wide text-gray-500">{title}</div>
      <ul className="mt-2 space-y-1">
        {fields.map((field) => (
          <li key={field.name} className={`flex items-center gap-2 rounded px-1.5 py-1 text-sm ${field.inUse ? 'bg-white font-medium text-gray-900 ring-1 ring-gray-200' : 'text-gray-600'}`}>
            <FieldBadge kind={kind === 'metric' ? 'metric' : field.type} />
            {field.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function BiToolMockup() {
  return (
    <figure>
      <div className="rounded-lg border border-gray-200 bg-white shadow-xl overflow-hidden">
        <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-100 px-4 py-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <span className="ml-2 text-xs text-gray-600">BI tool · Sales overview</span>
          <span className="ml-auto text-xs text-gray-500">Model: ecommerce</span>
        </div>

        <div className="grid md:grid-cols-[210px_1fr]">
          <aside className="space-y-5 border-gray-200 bg-gray-50 p-4 max-md:border-b md:border-r">
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-semibold text-gray-900">ecommerce</span>
              <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-medium text-blue-700 ring-1 ring-blue-200">Ossie model</span>
            </div>
            <FieldList title="Metrics" fields={modelFields.metrics} kind="metric" />
            <FieldList title="Dimensions" fields={modelFields.dimensions} kind="dimension" />
          </aside>

          <div className="min-w-0 space-y-5 p-5">
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-md bg-gray-100 px-2.5 py-1 text-gray-700">Order date: <span className="font-medium text-gray-900">Last 12 months</span></span>
              <span className="rounded-md bg-gray-100 px-2.5 py-1 text-gray-700">Region: <span className="font-medium text-gray-900">All</span></span>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="rounded-lg border border-gray-200 px-4 py-3">
                  <div className="text-xs text-gray-500">{kpi.label} · Sep 2026</div>
                  <div className="mt-1 text-2xl font-semibold text-gray-900">{kpi.value}</div>
                  <div className="mt-1 flex items-center gap-1 text-xs text-emerald-700">
                    <ArrowTrendingUpIcon className="h-3.5 w-3.5" /> {kpi.delta}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[3fr_2fr]">
              <div className="min-w-0 rounded-lg border border-gray-200 p-4">
                <div className="text-sm font-semibold text-gray-900">Total revenue by month</div>
                <div className="mt-3"><RevenueByMonth /></div>
              </div>
              <div className="min-w-0 rounded-lg border border-gray-200 p-4">
                <div className="text-sm font-semibold text-gray-900">Total revenue by region · Sep 2026</div>
                <div className="mt-3"><RevenueByRegion /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-gray-500">
        Mockup of a BI tool connected to the ecommerce semantic model. Metrics and dimensions come from the model,
        so every report calculates revenue the same way.
      </figcaption>
    </figure>
  )
}
