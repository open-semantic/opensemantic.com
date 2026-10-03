import ScrollyCoding from './components/ScrollyCoding'
import OntologyDiagram from './components/OntologyDiagram'
import BiToolMockup from './components/BiToolMockup'
import SemanticsEverywhere from './components/everywhere/SemanticsEverywhere'
import { ontologyTour } from './content/ontologySteps'
import { semanticModelTour } from './content/semanticModelSteps'
import { dataContractTour } from './content/dataContractSteps'
import layersImg from './assets/layers-diagram.png'
import ossieLogo from './assets/ossie-logo.png'

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
                            current definitions. See <a href="#distribution">Distributing Semantic Data</a> below.
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

                {/* Ontology */}
                <div id="ontology" className="prose max-w-none scroll-mt-16">
                    <h2>Ontology</h2>
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

                {/* Semantic Models */}
                <div id="semantic-models" className="prose max-w-none scroll-mt-16">
                    <h2>Semantic Models</h2>
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
                <div id="spec" className="prose max-w-none scroll-mt-16">
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
            </section>

            {/* Data Products and Data Contracts */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">
                <div id="data-products" className="prose max-w-none mb-10 scroll-mt-16">
                    <h2>Data Products and Data Contracts</h2>
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

            {/* Distributing Semantic Data */}
            <section id="distribution" className="pt-48 scroll-mt-16">
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
