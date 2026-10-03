export const semanticModelTour = {
  fileName: 'ecommerce.ossie.yaml',
  reference: {
    label: 'Apache Ossie Core Specification',
    href: 'https://github.com/apache/ossie/blob/main/core-spec/spec.md',
  },
  fullExample: {
    src: '/semantic_model.yaml',
    description: 'Here is a complete Ossie semantic model bringing all elements together: model definition with AI context, datasets with fields and multi-dialect expressions, relationships, metrics, and vendor-specific extensions.',
  },
  steps: [
    {
      id: 'model',
      title: 'Semantic Model',
      description: 'Every Ossie semantic model starts with a version and a model definition: a name, description, and optional AI context that helps AI agents understand and query the data correctly.',
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
      description: 'Metrics are aggregate business measures defined centrally. Each metric has multi-dialect expressions, ensuring consistent metric definitions across all tools, with no more conflicting "revenue" numbers.',
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
  ],
}
