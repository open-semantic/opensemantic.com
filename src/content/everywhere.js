import {
  CircleStackIcon,
  CodeBracketIcon,
  CpuChipIcon,
  CubeIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'

export const platforms = [
  { id: 'apps', label: 'Apps', examples: 'CRM, ERP, web shop', icon: Squares2X2Icon, users: 'Sales and service' },
  { id: 'data', label: 'Data Platforms', examples: 'Snowflake, Databricks', icon: CircleStackIcon, users: 'Analysts and controllers' },
  { id: 'ai', label: 'AI Platforms', examples: 'Agents, assistants, MCP', icon: CpuChipIcon, users: 'Managers and everyone else' },
]

export const knowledgeSources = [
  { id: 'documents', label: 'Documents', detail: 'SharePoint', icon: DocumentTextIcon },
  { id: 'code', label: 'Code', detail: 'Git repositories', icon: CodeBracketIcon },
  { id: 'data-products', label: 'Data Products', detail: 'Contracts, schemas', icon: CubeIcon },
  { id: 'emails', label: 'Emails', detail: 'Outlook, Gmail', icon: EnvelopeIcon },
]

// The same answer, wherever it is asked
export const sameNumber = { question: 'Revenue last month', value: '1.24M' }

export const semanticChips = [
  { label: 'Ontology', color: 'violet' },
  { label: 'Semantic models', color: 'blue' },
  { label: 'Data contracts', color: 'emerald' },
]

export const storySteps = [
  {
    title: 'Curated by domain experts',
    text: 'Domain experts curate the semantics: the ontology, semantic models, and data contracts, written in open formats such as Apache Ossie and ODCS.',
  },
  {
    title: 'Integrated into every platform',
    text: 'The same definitions are pushed into the knowledge bases and context layers of all relevant apps, data platforms, and AI platforms.',
    highlight: 'This is where the business value happens: in the tools business users work with every day.',
  },
  {
    title: 'Same numbers everywhere',
    text: `Every platform works with the same semantics. Ask any of them for ${sameNumber.question.toLowerCase()}, and the answer is ${sameNumber.value}.`,
  },
  {
    title: 'A semantic agent reads your knowledge bases',
    text: 'LLMs can extract semantics from existing business knowledge.',
  },
  {
    title: 'Proposals, reviewed in a loop',
    text: 'The agent turns its findings into proposals for the domain experts. Approved changes reach every platform, and feedback improves the next run. This creates a positive feedback loop. Every approved change makes the answers on all platforms more accurate, and every approval or rejection teaches the agent what the experts accept. Over time, proposals get better, reviews get faster, and the semantics keep up with the business.',
  },
]
