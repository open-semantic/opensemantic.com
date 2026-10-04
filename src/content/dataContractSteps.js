export const dataContractTour = {
  fileName: 'orders.odcs.yaml',
  reference: {
    label: 'Open Data Contract Standard',
    href: 'https://bitol-io.github.io/open-data-contract-standard/',
  },
  fullExample: {
    src: '/orders.odcs.yaml',
    description: 'Here is the complete data contract for the orders data product: fundamentals, servers, schema with semantic links, quality rules, SLAs, team, and AI context.',
  },
  steps: [
    {
      id: 'data-contract',
      title: 'Data Contract',
      description: 'A data contract defines a data product from the consumer\'s point of view. It starts with fundamentals like id, version, status, and the data product it belongs to, describes purpose, usage, and limitations, and lists the servers where consumers access the data, here a Snowflake schema.',
      code: `# !focus(1:19)
apiVersion: v3.2.0
kind: DataContract
id: orders
name: Orders
version: 1.0.0
status: active
domain: sales
dataProduct: orders
description:
  purpose: Web shop orders for analytics and AI agents
  usage: Revenue analysis and order volume trends
  limitations: Only orders placed since 2020-01-01
servers:
  - server: production
    environment: prod
    type: snowflake
    account: acme-eu
    database: SALES
    schema: ANALYTICS`
    },
    {
      id: 'schema',
      title: 'Schema',
      description: 'The schema defines tables and their properties with business names, logical and physical types, keys, and classifications. Authoritative definitions of type semantics link the orders table and its identifier columns to concepts of the ontology.',
      code: `apiVersion: v3.2.0
kind: DataContract
id: orders
# !focus(1:36)
schema:
  - name: orders
    physicalName: ORDERS
    physicalType: table
    description: One row per order, including cancelled ones
    authoritativeDefinitions:
      - type: semantics
        url: http://example.com/ontology/webshop/Order
    properties:
      - name: order_id
        businessName: Order Number
        description: Order number printed on the invoice
        logicalType: string
        physicalType: TEXT
        primaryKey: true
        required: true
        unique: true
        authoritativeDefinitions:
          - type: semantics
            url: http://example.com/ontology/webshop/OrderNr
      - name: customer_id
        businessName: Customer Number
        description: Customer who placed the order
        logicalType: string
        physicalType: TEXT
        required: true
        classification: internal
        authoritativeDefinitions:
          - type: semantics
            url: http://example.com/ontology/webshop/CustomerNr
      - name: order_total
        businessName: Order Total
        description: Order total in cents after discounts
        logicalType: integer
        physicalType: NUMBER
        required: true`
    },
    {
      id: 'quality',
      title: 'Quality and SLAs',
      description: 'Quality rules turn expectations into executable checks, as SQL queries or predefined metrics such as row counts. The ontology says amounts are never negative, and the contract checks that in the data. SLA properties state freshness, availability, and retention.',
      code: `apiVersion: v3.2.0
kind: DataContract
id: orders
schema:
  - name: orders
    properties:
      - name: order_total
        logicalType: integer
# !focus(1:7)
        quality:
          - type: sql
            description: Order totals are never negative
            query: |
              SELECT COUNT(*) FROM {object}
              WHERE {property} < 0
            mustBe: 0
# !focus(1:5)
    quality:
      - type: library
        description: At least 100,000 orders are expected
        metric: rowCount
        mustBeGreaterThan: 100000
# !focus(1:11)
slaProperties:
  - property: freshness
    value: 24
    unit: hours
    element: orders.order_date
    description: Orders are available within 24 hours
  - property: availability
    value: 99.9%
  - property: retention
    value: 5
    unit: years`
    },
    {
      id: 'data-product',
      title: 'Data Product',
      fileName: 'orders.odps.yaml',
      description: 'The data product is what a team owns and offers. Its ODPS file states identity, status, domain, and the owning team, and lists the output ports. Each output port references its data contract by contractId, so the orders port is described by the contract above.',
      code: `apiVersion: v1.1.0
kind: DataProduct
id: orders
name: Orders
version: v1.0.0
status: active
type: sourceAligned
domain: sales
description:
  purpose: Web shop orders for analytics and AI agents
  usage: Revenue analysis and order volume trends
  limitations: Only orders placed since 2020-01-01
team:
  name: sales
  members:
    - username: john@example.com
      name: John Doe
      role: owner
# !focus(1:6)
outputPorts:
  - name: orders
    version: 1.0.0
    type: tables
    description: All web shop orders in Snowflake
    contractId: orders`
    },
  ],
}
