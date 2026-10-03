import ScrollyCoding from './components/ScrollyCoding'
import OpenSemanticEditor from './components/OpenSemanticEditor'
import OntologyDiagram from './components/OntologyDiagram'
import BiToolMockup from './components/BiToolMockup'
import SemanticsEverywhere from './components/everywhere/SemanticsEverywhere'
import { ontologyTour } from './content/ontologySteps'
import { semanticModelTour } from './content/semanticModelSteps'
import { dataContractTour } from './content/dataContractSteps'
import layersImg from './assets/layers-diagram.png'
import ossieLogo from './assets/ossie-logo.png'
import '@fontsource/caveat/400.css'

function App() {
  return (
    <div className="min-h-screen bg-white">

            <main>
            {/* Hero Section */}
            <div className="relative isolate">
              <div className="pt-24 pb-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
                      Open Semantic
                    </h1>
                    <p className="mt-3 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                      Open standards for semantic data
                    </p>
                  </div>
                  <div className="flow-root mt-16">
                    <div className="-m-2 p-2 lg:-m-4 lg:p-4">
                      <img src={layersImg} alt="Layers: Ontology (conceptual), Semantic Models and Data Products (logical), Data (physical)" className="mx-auto w-full max-w-3xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Introduction - What is Semantic Data */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                <article id="what-is" className="prose max-w-none" itemScope itemType="https://schema.org/Article">
                    <h2 className="sr-only" itemProp="headline">What is Semantic Data?</h2>
                    <p itemProp="description">
                        Semantic data provides reliable business context for humans and agents. Tables and columns describe
                        how data is stored, but not what it means. Semantic data adds that meaning: the business concepts and
                        how they relate, how metrics like revenue or churn are calculated, and who owns a data product and
                        guarantees its quality. When this context is defined once in an open, machine-readable format, analysts,
                        BI tools, and AI agents all work from the same definitions. Agents stop guessing from column names, and
                        every tool reports the same numbers.
                    </p>
                </article>
            </section>

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
                {/* Why Semantic Data Matters */}
                <div id="why" className="prose max-w-none mb-24 scroll-mt-16">
                    <h2>Why Semantic Data Matters</h2>
                    <p>
                        Semantic technologies have been around for many years, but with the rise of AI, they are finally
                        becoming more relevant.
                        LLMs need the context to understand what a user asks for,
                        they need to evaluate which data product carries the relevant data for the business domain,
                        and they need to decide if a data product is reliable enough to be used:
                    </p>
                    <ul>
                        <li>
                            <strong>Speak the business language.</strong> Customers, orders, revenue, and churn are
                            defined in the terms the business uses, not in table and column names.
                        </li>
                        <li>
                            <strong>Give agents business context.</strong> AI agents read the same definitions as your
                            analysts, so they stop guessing what <code>cust_flg_2</code> means.
                        </li>
                        <li>
                            <strong>Same answers, every time.</strong> Every app and every agent returns the same answer
                            to the same question, today and tomorrow.
                        </li>
                        <li>
                            <strong>Work on the correct data.</strong> Business concepts point to the data products that
                            hold them, so teams pick the right source and report the same numbers.
                        </li>
                        <li>
                            <strong>Token efficiency.</strong> A compact semantic definition replaces schema exploration,
                            data sampling, and failed query retries. Agents need fewer tokens and answer faster.
                        </li>
                    </ul>
                </div>

                {/* The Need for Open Standards */}
                <div id="open-standards" className="prose max-w-none mb-24 scroll-mt-16">
                    <h2>The Need for Open Standards</h2>
                    <p>
                        Semantic metadata becomes a core business asset. Your definitions of concepts, metrics, and rules
                        encode how your business works, and every tool that works with your data needs them: business
                        apps, BI tools, data platforms, and AI agents. Today, most of these tools keep their own
                        definitions in their own formats. Open standards turn these scattered definitions into one asset
                        that you own:
                    </p>
                    <ul>
                        <li>
                            <strong>One format, many tools.</strong> <a href="#ossie">Apache Ossie</a> describes
                            ontologies and semantic models, and <a href="#data-products">Bitol ODPS and ODCS</a> describe
                            data products and data contracts. Every tool that supports them reads and writes the same
                            definitions.
                        </li>
                        <li>
                            <strong>No vendor lock-in.</strong> Definitions in an open format stay yours when you add or
                            replace a tool. Nothing has to be rebuilt from scratch.
                        </li>
                        <li>
                            <strong>Semantics as code.</strong> Keep ontologies, semantic models, and data contracts as
                            YAML files in Git. Changes go through pull requests and reviews, CI validates them against the
                            JSON Schemas, and every release is versioned.
                        </li>
                        <li>
                            <strong>Published everywhere.</strong> Each release is pushed into the knowledge bases and
                            context layers of your apps, data platforms, and AI platforms, so every tool works with the
                            current definitions. See <a href="#everywhere">Semantics in Every Platform</a> below.
                        </li>
                    </ul>
                </div>

                {/* Apache Ossie */}
                <span id="osi" className="block scroll-mt-16" aria-hidden="true" />
                <div id="ossie" className="prose max-w-none mb-24 scroll-mt-16">
                    <h2 className="flex items-center justify-between gap-6">
                        Apache Ossie
                        <a href="https://ossie.apache.org/" className="not-prose shrink-0">
                            <img src={ossieLogo} alt="Apache Ossie logo" className="h-12 w-auto" />
                        </a>
                    </h2>
                    <p>
                        <a href="https://ossie.apache.org/">Apache Ossie</a> (incubating) is an industry-driven open
                        standard for semantic data. It started as Open Semantic Interchange (<abbr title="Yes, a difficult acronym for any CS101 graduate" className="cursor-help">OSI</abbr>),
                        launched by Snowflake and partners in September 2025, and entered the Apache Incubator in
                        July 2026 under its new name.
                    </p>
                    <p>
                        More than 50 organizations contribute, including Snowflake, Databricks, Salesforce, dbt Labs,
                        Dremio, GoodData, RelationalAI, and Honeydew. The specification is developed in the open under
                        Apache Software Foundation governance, with public mailing lists, GitHub discussions, and a vote
                        for every spec change. It is licensed under the Apache License 2.0.
                    </p>
                    <p>
                        Ossie covers two layers of semantic data, both written in YAML or JSON:
                    </p>
                    <div className="not-prose grid gap-4 sm:grid-cols-2 my-8">
                        <a href="#ontology" className="block rounded-lg border border-gray-200 border-t-4 border-t-violet-600 p-5 transition-colors hover:bg-gray-50">
                            <div className="text-xs font-medium uppercase tracking-wide text-violet-700">Conceptual</div>
                            <h3 className="mt-1 text-lg font-semibold text-gray-900">Ontology</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Business concepts, their relationships, and rules, mapped to the datasets that hold them.
                            </p>
                            <p className="mt-3 text-xs text-gray-500">Specification 0.2.0 (in development)</p>
                        </a>
                        <a href="#semantic-models" className="block rounded-lg border border-gray-200 border-t-4 border-t-blue-600 p-5 transition-colors hover:bg-gray-50">
                            <div className="text-xs font-medium uppercase tracking-wide text-blue-700">Logical</div>
                            <h3 className="mt-1 text-lg font-semibold text-gray-900">Semantic Models</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Datasets, relationships, metrics, and multi-dialect expressions for BI tools, query engines, and agents.
                            </p>
                            <p className="mt-3 text-xs text-gray-500">Specification 0.1.1 (released), 0.2.0 in development</p>
                        </a>
                    </div>
                    <p>
                        Source, issues, and discussions are on <a href="https://github.com/apache/ossie">GitHub</a>.
                    </p>
                </div>

                {/* Apache Ossie Ontology */}
                <div id="ontology" className="prose max-w-none scroll-mt-16">
                    <h2>Apache Ossie Ontology</h2>
                    <p>
                        An ontology describes the business in its own terms: the concepts that matter, how they relate,
                        and the rules that always hold. It is independent of where and how the data is stored.
                    </p>
                    <p>
                        Here is an ontology for an online store with customers, orders, products, payments, and
                        shipments. Click a concept to see its properties and rules:
                    </p>
                </div>
            </section>

            {/* Ontology Diagram */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="rounded-lg border border-gray-200 overflow-hidden">
                    <OntologyDiagram src="/ontology.yaml" />
                </div>
            </div>

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                <div className="prose max-w-none mb-10">
                    <p>
                        Ossie defines a YAML specification for these elements in the ontology:
                    </p>
                </div>
            </section>

            <div className="px-8 py-12 max-w-6xl mx-auto">
                <ScrollyCoding {...ontologyTour} />
            </div>

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                <div id="ontology-spec" className="prose max-w-none mb-48 scroll-mt-16">
                    <p>
                        The ontology specification is part of the upcoming Ossie 0.2.0 release (currently 0.2.0.dev0).
                        It includes a <a href="https://github.com/apache/ossie/blob/main/ontology/ontology.json">JSON Schema</a> for
                        validation and a <a href="https://github.com/apache/ossie/blob/main/ontology/ontology.md">specification document</a>.
                        Expect changes before the release.
                    </p>
                </div>

                {/* Apache Ossie Semantic Models */}
                <div id="semantic-models" className="prose max-w-none scroll-mt-16">
                    <h2>Apache Ossie Semantic Models</h2>
                    <p>
                        Semantic models are primarily used in BI tools to describe data for analytics: logical datasets and their fields, the
                        relationships between them, and the metrics calculated on top. Each dataset and field links to the
                        underlying tables and columns, so every metric resolves to the actual data. Expressions can be written in
                        multiple SQL dialects, so BI tools, query engines, and AI agents all calculate revenue the same way.
                    </p>
                    <p>
                        In a BI tool, the semantic model shows up as named metrics and dimensions that business users
                        can drag into a report:
                    </p>
                </div>
            </section>

            {/* BI Tool Mockup */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <BiToolMockup />
            </div>

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                <div className="prose max-w-none mb-10">
                    <p>
                        Each BI tool (Power BI, Looker, Tableau, …) uses its own proprietary format to define semantic
                        models. Apache Ossie defines a common standard that makes them interchangeable. Let's explore
                        an Ossie semantic model step-by-step:
                    </p>
                </div>
            </section>

            <div className="px-8 py-12 max-w-6xl mx-auto">
                <ScrollyCoding {...semanticModelTour} />
            </div>

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                <div id="spec" className="prose max-w-none mb-48 scroll-mt-16">
                    <p>
                        The examples use the released core specification 0.1.1. Version 0.2.0 is in development:
                        each document holds a single model at its root (the <code>semantic_model</code> list is
                        removed), fields and metrics get logical data types, and new dialects such as BigQuery, DAX,
                        and Ossie's own portable SQL are added.
                        See the <a href="https://github.com/apache/ossie/blob/main/core-spec/spec.md">specification document</a> and
                        the <a href="https://github.com/apache/ossie/blob/main/core-spec/ossie-schema.json">JSON Schema</a>.
                    </p>
                    <p>
                        <strong>Note:</strong> Ossie is not yet at version 1.0. We encourage early adoption and feedback,
                        but be prepared for breaking changes in future versions.
                    </p>
                </div>

                {/* Editor Section */}
                <div id="editor" className="prose max-w-none mb-8 scroll-mt-16">
                    <h2>Open Semantic Editor</h2>
                    <p>
                        Create and edit semantic models visually with the open-source <a href="https://editor.opensemantic.com/">Open
                        Semantic Editor</a> (<a href="https://github.com/open-semantic/opensemantic-editor">GitHub</a>).
                        It provides a visual interface for creating and editing Ossie semantic models.
                    </p>
                </div>
            </section>

            {/* Editor Browser Frame */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 overflow-visible">
                <div className="relative overflow-visible">
                    {/* Hand-written note - only visible on larger screens */}
                    <div className="block absolute -left-32 top-32 text-gray-400 select-none pointer-events-none">
                        <div className="text-xl -rotate-6 whitespace-nowrap" style={{ fontFamily: 'Caveat, cursive' }}>
                            <div>Try out,</div>
                            <div>it's interactive!</div>
                        </div>
                        <svg
                            className="w-12 h-12 ml-8 mt-1"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0.323784 0.04476C0.206088 0.098232 0.08712 0.22944 0.047496000000000003 0.34951200000000004C0.013344000000000002 0.453048 0.025248000000000003 0.701616 0.09806400000000001 1.4040000000000001C0.303264 3.3834960000000005 0.7845120000000001 5.344824 1.5114 7.164000000000001C3.127992 11.209848000000001 5.827848 14.607552 9.411984 17.106696C11.318688000000002 18.4362 13.583712000000002 19.510248 15.852 20.160504C17.755368 20.706144 19.821024 20.999232 21.76764 20.999856L22.259304 21 21.164160000000003 22.098C20.561832000000003 22.701912 20.052984000000002 23.2284 20.0334 23.268C19.866648 23.60508 20.102976 23.998944 20.472 23.998944C20.698248 23.998944 20.699928 23.99748 22.338648000000003 22.360752C23.368008 21.33264 23.89704 20.787528000000002 23.928648000000003 20.722416C23.990448 20.595096 23.990928 20.402808 23.929752 20.285040000000002C23.904024 20.235528000000002 23.182416 19.496568 22.303752 18.61992C20.867784 17.187312000000002 20.714256000000002 17.041296 20.617008000000002 17.015664C20.333784 16.941024 20.041272 17.126328 19.980216000000002 17.419056C19.971144 17.462544 19.976784 17.554344 19.992744 17.623056C20.021064 17.745 20.048712000000002 17.775024 21.140304 18.87L22.258824 19.992 21.755424 19.991976C20.649096 19.991952 19.467864 19.888464000000003 18.312 19.690272C14.663832000000001 19.064736 11.141328 17.412264 8.34 15.012167999999999C7.667568000000001 14.436072000000001 6.702768 13.48632 6.157776 12.864C4.178496 10.603944 2.712504 7.950216 1.84884 5.064C1.43652 3.68616 1.1415840000000002 2.0862480000000003 1.0435919999999999 0.6960000000000001C1.0356960000000002 0.5838 1.0183680000000002 0.44232 1.005096 0.381624C0.9406319999999999 0.086904 0.6008640000000001 -0.081096 0.323784 0.04476" fillRule="evenodd" />
                        </svg>
                    </div>
                    <div className="rounded-lg bg-white border border-gray-200 shadow-xl overflow-hidden">
                        {/* Browser-like header */}
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-b border-gray-200">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400"/>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"/>
                                <div className="w-3 h-3 rounded-full bg-green-400"/>
                            </div>
                            <span className="text-gray-500 text-xs ml-2"><a
                                href="https://editor.opensemantic.com">editor.opensemantic.com</a></span>
                        </div>
                        {/* Editor content */}
                        <OpenSemanticEditor height="700px" />
                    </div>
                </div>
            </div>

            {/* Bitol Data Products and Data Contracts */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">
                <div id="data-products" className="prose max-w-none mb-10 scroll-mt-16">
                    <h2>Bitol Data Products and Data Contracts</h2>
                    <p>
                        Ontologies and semantic models describe what data means. Data products and data contracts
                        describe the data that is actually delivered: who owns it, where it is available, its schema,
                        and the quality and service levels consumers can rely on.
                    </p>
                    <p>
                        <a href="https://bitol.io/">Bitol</a>, a project of the Linux Foundation's
                        LF AI &amp; Data Foundation, maintains two open standards for this layer. Both are licensed under
                        the Apache License 2.0:
                    </p>
                    <div className="not-prose grid gap-4 sm:grid-cols-2 my-8">
                        <a href="https://bitol-io.github.io/open-data-product-standard/" className="block rounded-lg border border-gray-200 border-t-4 border-t-emerald-600 p-5 transition-colors hover:bg-gray-50">
                            <div className="text-xs font-medium uppercase tracking-wide text-emerald-700">Logical</div>
                            <h3 className="mt-1 text-lg font-semibold text-gray-900">Open Data Product Standard (ODPS)</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                A data product's identity, owner, and status, with input and output ports that reference data contracts.
                            </p>
                            <p className="mt-3 text-xs text-gray-500">Version 1.1.0</p>
                        </a>
                        <a href="https://bitol-io.github.io/open-data-contract-standard/" className="block rounded-lg border border-gray-200 border-t-4 border-t-emerald-600 p-5 transition-colors hover:bg-gray-50">
                            <div className="text-xs font-medium uppercase tracking-wide text-emerald-700">Logical</div>
                            <h3 className="mt-1 text-lg font-semibold text-gray-900">Open Data Contract Standard (ODCS)</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                The agreement between producer and consumers: schema, quality rules, SLAs, servers, and team.
                            </p>
                            <p className="mt-3 text-xs text-gray-500">Version 3.2.0</p>
                        </a>
                    </div>
                    <p>
                        Each output port of a data product has a data contract. The contract defines the data product
                        from the consumer's point of view: what data they get, where they access it, and which quality
                        and service levels they can rely on.
                    </p>
                    <div className="not-prose my-8 rounded-r-lg border-l-4 border-emerald-600 bg-emerald-50 px-5 py-4">
                        <p className="font-semibold text-emerald-900">A semantic model can be a data product</p>
                        <p className="mt-2 text-sm leading-relaxed text-emerald-900">
                            When a <a href="#semantic-models" className="underline">semantic model</a> has clear
                            ownership, it can be a data product of its own. Like any other data product, it can be specified
                            and quality-assured through a data contract: the contract describes the metrics and dimensions
                            consumers can use (ODCS 3.2 adds <code>semanticType</code> for measures and dimensions), and its
                            quality rules and SLAs ensure the numbers are correct and fresh.
                        </p>
                    </div>
                    <p>
                        Let's explore a data contract step-by-step:
                    </p>
                </div>
            </section>

            <div className="px-8 py-12 max-w-6xl mx-auto">
                <ScrollyCoding {...dataContractTour} />
            </div>

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                <div id="data-contract-tools" className="prose max-w-none scroll-mt-16">
                    <p>
                        The examples are available as <a href="/orders.odcs.yaml">orders.odcs.yaml</a> and <a href="/orders.odps.yaml">orders.odps.yaml</a>.
                        Validate a data contract and test your data against it with the open-source <a href="https://github.com/datacontract/datacontract-cli">Data
                        Contract CLI</a>, edit it in the <a href="https://editor.datacontract.com/">Data Contract Editor</a>,
                        and manage data products with the <a href="https://github.com/datacontract/dataproduct-cli">Data Product CLI</a>.
                        Learn more about data contracts at <a href="https://datacontract.com">datacontract.com</a>.
                    </p>
                </div>
            </section>

            {/* Entropy Data Section - commented out
                <div id="entropy-data" className="prose max-w-none scroll-mt-16 pb-8">
                    <h2>Entropy Data</h2>
                    <p>
                        <a href="https://entropy-data.com">Entropy Data</a> supports Apache Ossie
                        and integrates Ossie semantic models into its data product management platform.
                    </p>
                </div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <a href="https://demo.entropy-data.com/?ref=opensemantic-com-preview">
                        ...
                    </a>
                </div>
            */}

            {/* Semantics in Every Platform */}
            <section id="everywhere" className="pt-48 scroll-mt-16">
                <SemanticsEverywhere />
            </section>

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">
                {/* About */}
                <div id="about" className="prose max-w-none scroll-mt-16 pb-36">
                    <h2>About</h2>
                    <p>
                        This website is maintained by <a href="https://entropy-data.com"><strong>Entropy Data</strong></a>.
                        We are passionate about open standards for data and believe that common semantic standards
                        are essential for the future of analytics and AI.
                    </p>
                    <p>
                        Our work on <a href="https://datacontract.com">data contracts</a> and <a href="https://datamesh-architecture.com">data mesh</a> has
                        shown us that interoperability requires open, vendor-agnostic standards. Apache Ossie is the next step:
                        ensuring that business semantics travel with the data, regardless of which tool processes it.
                    </p>
                    <p>
                        The Apache Ossie specification is licensed under the <a href="https://github.com/apache/ossie/blob/main/LICENSE">Apache License 2.0</a>.
                        Apache Ossie is an effort undergoing incubation at The Apache Software Foundation (ASF).
                        This website is independent and not an official ASF page. The official project website
                        is <a href="https://ossie.apache.org/">ossie.apache.org</a>.
                    </p>
                </div>

            </section>
            </main>

            {/* Footer */}
            <footer className="bg-white">
                <div className="mx-auto max-w-6xl overflow-hidden pb-20 px-6 lg:px-8">
                    <div className="mt-10 text-xs leading-5 text-gray-500">
                        <div className="flex justify-center space-x-6">
                            <img src="https://entropy-data.com/media/logo_fuchsia_v2.svg" className="w-16" alt="Entropy Data Logo" />
                        </div>
                        <div className="text-center mt-3">
                            This website is maintained by <a href="https://www.entropy-data.com/">Entropy Data</a>
                        </div>
                    </div>

                    <nav className="-mb-6 mt-10 md:columns-2 text-center sm:flex sm:justify-center sm:space-x-12"
                         aria-label="Footer">
                        <div className="pb-6">
                            <a href="https://entropy-data.com/legal-notice"
                               className="text-sm leading-6 text-gray-600 hover:text-gray-900">Legal Notice</a>
                        </div>
                    </nav>
                </div>
            </footer>
    </div>
  )
}

export default App
