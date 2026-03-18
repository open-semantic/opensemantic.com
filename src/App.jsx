import ScrollyCoding from './components/ScrollyCoding'
import semanticmodelsImg from './assets/semanticmodels-diagram.png'
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
                    <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                      Open Semantic Interchange
                    </h1>
                    <p className="mt-3 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                      Semantic models for AI and BI.
                    </p>
                  </div>
                  <div className="flow-root mt-16">
                    <div className="-m-2 p-2 lg:-m-4 lg:p-4">
                      <img src={semanticmodelsImg} alt="Semantic Models Diagram" className="mx-auto w-full max-w-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Introduction - What is a Semantic Model */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                <article id="what-is" className="prose max-w-none" itemScope itemType="https://schema.org/Article">
                    <h2 className="sr-only" itemProp="headline">What is a Semantic Model?</h2>
                    <p itemProp="description">
                        A semantic model is a structured representation of data that defines business meaning, relationships,
                        and metrics on top of raw data. It bridges the gap between technical data storage and business
                        understanding, enabling consistent analytics across different tools and platforms.
                    </p>
                </article>
            </section>

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
                <div id="osi" className="prose mb-10 max-w-none">
                    <h2>Open Semantic Interchange</h2>

                    <p>
                        <a href="https://github.com/open-semantic-interchange/OSI">Open Semantic Interchange</a> (OSI)
                        is a collaborative, open-source initiative to create a common, vendor-agnostic semantic model
                        specification. It ensures data definitions and business semantics remain consistent as they are
                        interchanged between AI agents, BI platforms, and analytics tools.
                    </p>
                    <p>
                        Let's build an OSI semantic model step-by-step:
                    </p>
                </div>
            </section>

            {/* Scrollycoding Section - Full Width */}
            <div className="px-8 py-12 max-w-6xl mx-auto">
                <ScrollyCoding/>
            </div>


            {/* Continue Main Content */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">

                {/* Why Semantic Models Matter */}
                <div id="why" className="prose max-w-none mb-48 scroll-mt-16">
                    <h2>Why Semantic Models Matter</h2>
                    <p>
                        Semantic models are not just metadata. They are the foundation for consistent analytics,
                        reliable AI, and seamless tool interoperability.
                    </p>
                    <ol>
                        <li>
                            <strong>Consistency</strong>: Define metrics and business logic once, use them everywhere.
                            No more conflicting definitions of "revenue" or "active users" across different BI tools.
                            OSI provides a single source of truth for your data semantics.
                        </li>
                        <li>
                            <strong>Interoperability</strong>: Move semantic models between platforms without losing
                            meaning. OSI supports multi-dialect expressions for ANSI SQL, Snowflake, Databricks,
                            Tableau, and MDX, so your definitions work across your entire stack.
                        </li>
                        <li>
                            <strong>AI-Readiness</strong>: AI agents need context to work with data effectively.
                            OSI semantic models include AI context with instructions, synonyms, and examples,
                            enabling agents to understand and query your data correctly.
                        </li>
                    </ol>
                    <p>
                        Semantic models are essential when working with data across multiple tools, teams, or AI agents.
                    </p>
                </div>

                {/* Specification */}
                <div id="spec" className="prose max-w-none mb-48 scroll-mt-16">
                    <h2>Specification</h2>
                    <p>
                        The OSI specification (v0.1.1) defines a YAML/JSON format for describing semantic models.
                        It includes a <a href="https://github.com/open-semantic-interchange/OSI/blob/main/core-spec/osi-schema.json">JSON Schema</a> for
                        validation and a comprehensive <a href="https://github.com/open-semantic-interchange/OSI/blob/main/core-spec/spec.md">specification document</a>.
                    </p>
                    <p>
                        <strong>Note:</strong> The current version 0.1.1 is not considered stable. The specification is
                        under active development and may change. We encourage early adoption and feedback, but be prepared
                        for breaking changes in future versions.
                    </p>
                    <p>
                        Key features of the specification:
                    </p>
                    <ul>
                        <li><strong>Multi-dialect expressions</strong>: Write field and metric expressions in multiple SQL dialects (ANSI SQL, Snowflake, Databricks, Tableau, MDX)</li>
                        <li><strong>Composite keys</strong>: Support for multi-column primary and foreign keys</li>
                        <li><strong>AI context</strong>: Structured instructions, synonyms, and examples for AI agents</li>
                        <li><strong>Vendor extensions</strong>: Custom metadata for platform-specific features</li>
                        <li><strong>Strict validation</strong>: JSON Schema with <code>additionalProperties: false</code> for precise model definitions</li>
                    </ul>
                </div>


                {/* What it's not */}
                <div id="what-its-not" className="prose max-w-none mb-48 scroll-mt-16">
                    <h2>What OSI is Not</h2>
                    <p>
                        OSI has a clear scope. Understanding what it <em>doesn't</em> do helps you pick the right tool for each job:
                    </p>
                    <ul>
                        <li>
                            <strong>Not a Data Contract.</strong> A <a href="https://datacontract.com">data contract</a> defines
                            ownership, quality rules, SLAs, and terms of use.
                            OSI defines business meaning, metrics, and expressions.
                            They are complementary &mdash; see below.
                        </li>
                        <li>
                            <strong>Not a Quality Engine.</strong> OSI does not validate data or enforce constraints.
                            Use tools like the <a href="https://github.com/datacontract/datacontract-cli">Data Contract CLI</a>,
                            Great Expectations, or Soda to test data quality.
                        </li>
                        <li>
                            <strong>Not an Ontology.</strong> OSI models are practical, tabular semantic layers
                            for analytics and BI &mdash; not formal knowledge graphs or RDF/OWL ontologies.
                        </li>
                        <li>
                            <strong>Not a Data Dictionary.</strong> A data dictionary catalogs every column
                            in a database. OSI defines a curated, business-focused view with metrics,
                            relationships, and multi-dialect expressions.
                        </li>
                        <li>
                            <strong>Not a BI Tool.</strong> OSI doesn't visualize or query data.
                            It provides the portable semantic layer that BI tools consume.
                        </li>
                        <li>
                            <strong>Not a Transformation Framework.</strong> OSI describes <em>what</em> data means,
                            not <em>how</em> to transform it. Use dbt, Spark, or SQL pipelines for transformations.
                        </li>
                    </ul>
                </div>

                {/* Data Contracts and Semantic Models */}
                <div id="data-contracts" className="prose max-w-none mb-48 scroll-mt-16">
                    <h2>Data Contracts and Semantic Models</h2>
                    <p>
                        <a href="https://datacontract.com">Data contracts</a> and semantic models are complementary standards
                        that work together to create a complete, well-governed data ecosystem.
                    </p>
                    <p>
                        A <strong>data contract</strong>, defined with the <a href="https://bitol-io.github.io/open-data-contract-standard/latest/">Open Data Contract Standard</a> (ODCS),
                        specifies the agreement between a data producer and its consumers: the schema, data quality rules,
                        SLAs, ownership, and terms of use. It answers: <em>"What data is available, who owns it, and what guarantees come with it?"</em>
                    </p>
                    <p>
                        A <strong>semantic model</strong>, defined with <a href="https://github.com/open-semantic-interchange/OSI">OSI</a>,
                        adds business meaning on top of the raw data: metrics, relationships, dimensions, and AI context.
                        It answers: <em>"What does this data mean, how do tables relate, and how should metrics be calculated?"</em>
                    </p>
                    <p>
                        The two standards are complementary with some intentional overlap.
                        Here is how they compare across key concerns:
                    </p>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Data Contract (ODCS)</th>
                                <th>Semantic Model (OSI)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Schema / Dataset</td><td>&#x2705;</td><td>&#x2705;</td></tr>
                            <tr><td>Relationships</td><td>&#x2705;</td><td>&#x2705;</td></tr>
                            <tr><td>Metrics</td><td></td><td>&#x2705;</td></tr>
                            <tr><td>Dynamic Fields</td><td></td><td>&#x2705;</td></tr>
                            <tr><td>Custom Properties / Vendor Extensions</td><td>&#x2705;</td><td>&#x2705;</td></tr>
                            <tr><td>Terms of Use</td><td>&#x2705;</td><td></td></tr>
                            <tr><td>Quality & SLAs</td><td>&#x2705;</td><td></td></tr>
                            <tr><td>AI Context</td><td>(upcoming)</td><td>&#x2705;</td></tr>
                        </tbody>
                    </table>
                    <p>
                        Both standards define schema structure and relationships &mdash; this overlap is intentional.
                        A data contract is about trust and governance: it specifies the <em>physical</em> data that is delivered,
                        along with quality rules, SLAs, ownership, and terms of use.
                        A semantic model adds <em>business meaning</em> on top of that data: metrics, dimensions,
                        multi-dialect expressions, and AI context.
                    </p>
                    <p>
                        For example: a data contract ensures the <code>order_total</code> column is present, not null, and of type integer.
                        A semantic model defines that <code>total_revenue = SUM(order_total)</code>, that it's measured in cents,
                        and that orders relate to customers via <code>customer_id</code>.
                    </p>
                    <p>
                        Use both: data contracts to guarantee data quality and ownership, and OSI semantic models
                        to ensure consistent business semantics across every tool in your stack.
                    </p>
                </div>

            </section>

            {/* Entropy Data Section - commented out
                <div id="entropy-data" className="prose max-w-none scroll-mt-16 pb-8">
                    <h2>Entropy Data</h2>
                    <p>
                        <a href="https://entropy-data.com">Entropy Data</a> supports the Open Semantic Interchange
                        initiative and integrates OSI semantic models into its data product management platform.
                    </p>
                </div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <a href="https://demo.entropy-data.com/?ref=opensemantic-com-preview">
                        ...
                    </a>
                </div>
            */}

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* About */}
                <div id="about" className="prose max-w-none scroll-mt-16 pb-36">
                    <h2>About</h2>
                    <p>
                        This website is maintained by <a href="https://entropy-data.com"><strong>Entropy Data</strong></a>.
                        We are passionate about open standards for data and believe that a common semantic model
                        specification is essential for the future of analytics and AI.
                    </p>
                    <p>
                        Our work on <a href="https://datacontract.com">data contracts</a> and <a href="https://datamesh-architecture.com">data mesh</a> has
                        shown us that interoperability requires open, vendor-agnostic standards. OSI is the next step:
                        ensuring that business semantics travel with the data, regardless of which tool processes it.
                    </p>
                    <p>
                        The OSI specification is licensed under <a href="https://github.com/open-semantic-interchange/OSI/blob/main/LICENSE-Docs">Creative Commons Attribution (CC BY)</a>.
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
