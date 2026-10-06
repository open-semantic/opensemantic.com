// Rendered as the visible FAQ section and as FAQPage structured data in the prerendered HTML
export const faq = [
  {
    question: 'What is semantic data?',
    answer:
      'Semantic data provides reliable business context for humans and agents. Tables and columns describe how data is stored, but not what it means. Semantic data adds that meaning: the business concepts and how they relate, how metrics like revenue or churn are calculated, and who owns a data product and guarantees its quality.',
  },
  {
    question: 'What is Apache Ossie?',
    answer:
      'Apache Ossie (incubating) is an industry-driven, vendor-neutral open standard for semantic data. It defines YAML and JSON formats for ontologies and semantic models, so that business definitions stay consistent as they are exchanged between AI agents, BI platforms, and analytics tools. It is developed under Apache Software Foundation governance and licensed under the Apache License 2.0.',
  },
  {
    question: 'Is Apache Ossie the same as Open Semantic Interchange (OSI)?',
    answer:
      'Yes. Open Semantic Interchange (OSI) was launched by Snowflake and partners in September 2025. In July 2026 the project entered the Apache Incubator and was renamed Apache Ossie to avoid confusion with other projects that share the OSI acronym.',
  },
  {
    question: 'What is the difference between an ontology and a semantic model?',
    answer:
      'An ontology is conceptual: it describes business concepts, their relationships, and rules, independent of where and how the data is stored. A semantic model is logical: it describes datasets, fields, relationships, and metrics that link to the actual tables and columns, so BI tools, query engines, and AI agents calculate metrics the same way. Ontology mappings connect the two.',
  },
  {
    question: 'What is an Apache Ossie ontology?',
    answer:
      'An Ossie ontology is a conceptual model of the business. It defines concepts (entity types and value types), relationships between them with multiplicities and verbalizations, and business rules (requires and derived_by expressions). Ontology mappings connect concepts and relationships to the datasets and fields of an Ossie semantic model.',
  },
  {
    question: 'What does an Apache Ossie semantic model include?',
    answer:
      'An Ossie semantic model includes datasets (logical fact and dimension tables with fields), relationships (foreign key connections between datasets), metrics (aggregate business measures like revenue and order count), AI context (instructions, synonyms, and examples for AI agents), and custom extensions for vendor-specific metadata.',
  },
  {
    question: 'How do Apache Ossie, ODPS, and ODCS fit together?',
    answer:
      'Apache Ossie ontologies and semantic models describe what data means. The Bitol standards describe the data that is delivered: the Open Data Product Standard (ODPS) defines a data product with its owner and output ports, and the Open Data Contract Standard (ODCS) defines the schema, quality rules, SLAs, and AI context of each output port. ODCS authoritative definitions can link tables and columns to ontology concepts.',
  },
  {
    question: 'What platforms does Apache Ossie support?',
    answer:
      'Ossie supports multi-dialect expressions for ANSI SQL, Snowflake, Databricks, Tableau, and MDX, with BigQuery, DAX, MAQL, Sigma, ThoughtSpot, and a portable Ossie SQL dialect added in version 0.2.0. Vendor-specific metadata for Snowflake, Salesforce, dbt, Databricks, GoodData, and others is stored in custom extensions.',
  },
  {
    question: 'How does Apache Ossie differ from vendor-specific semantic layers?',
    answer:
      'Unlike vendor-specific semantic layers, Ossie is a vendor-neutral specification that can be translated to and from any platform. This prevents metadata lock-in and lets the same definitions feed AI, data, BI, and software platforms.',
  },
]
