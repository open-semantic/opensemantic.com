export const ontologyTour = {
  fileName: 'ecommerce.ontology.ossie.yaml',
  reference: {
    label: 'Apache Ossie Ontology Specification',
    href: 'https://github.com/apache/ossie/blob/main/ontology/ontology.md',
  },
  fullExample: {
    src: '/ontology.yaml',
    description: 'Here is the complete e-commerce ontology from the diagram above: value types and entity types, relationships with verbalizations, business rules, and the mapping to the semantic model shown below.',
  },
  steps: [
    {
      id: 'ontology',
      title: 'Ontology',
      description: 'An Ossie ontology starts with a version, a name, and an optional description and AI context.',
      code: `# !focus(1:12)
version: "0.2.0.dev0"
name: ecommerce
description: Business concepts of an online store
ai_context:
  instructions: >
    Use this ontology to understand customers, orders,
    products, payments, and shipments.
    Amounts are always in cents.
  synonyms:
    - "customer: buyer, shopper, client"
    - "order: purchase, sale"
    - "product: item, article"
ontology:
  - concept: Customer
    type: EntityType
  - concept: Order
    type: EntityType`
    },
    {
      id: 'concepts',
      title: 'Concepts',
      description: 'Concepts are the things that matter to the business. Entity types like Customer and Order are real-world objects, referenced by an identifier. Value types like CustomerNr or Amount are data types with business meaning that extend built-in types such as String, Integer, or Date. An optional IRI gives a concept a global identifier, so data contracts and other tools can refer to it.',
      code: `version: "0.2.0.dev0"
name: ecommerce
ontology:
# !focus(1:25)
  - concept: CustomerNr
    type: ValueType
    extends: [String]
    description: Customer number assigned at registration
  - concept: OrderNr
    type: ValueType
    extends: [String]
    description: Order number printed on the invoice
  - concept: Region
    type: ValueType
    extends: [String]
    description: Sales region
  - concept: Amount
    type: ValueType
    extends: [Integer]
    description: Monetary amount in cents
  - concept: Customer
    type: EntityType
    description: A person or company that buys from us
    identify_by: [ nr ]
  - concept: Order
    type: EntityType
    iri: http://example.com/ontology/webshop/Order
    description: A confirmed purchase by a customer
    identify_by: [ nr ]`
    },
    {
      id: 'relationships',
      title: 'Relationships',
      description: 'Relationships connect concepts. Each one is grouped under the concept that plays its first role, so Order.placed_by links an order to its customer. Multiplicities state that an order is placed by at most one customer, and verbalizations describe each link in plain business language.',
      code: `version: "0.2.0.dev0"
name: ecommerce
ontology:
  - concept: Customer
    type: EntityType
    identify_by: [ nr ]
# !focus(1:13)
    relationships:
      - name: nr
        roles:
          - concept: CustomerNr
        multiplicity: OneToOne
        verbalizes:
          - "{Customer} is identified by {CustomerNr}"
      - name: lives_in
        roles:
          - concept: Region
        multiplicity: ManyToOne
        verbalizes:
          - "{Customer} lives in {Region}"
  - concept: Order
    type: EntityType
# !focus(1:20)
    relationships:
      - name: placed_by
        roles:
          - concept: Customer
        multiplicity: ManyToOne
        verbalizes:
          - "{Order} is placed by {Customer}"
          - "{Customer} places {Order}"
      - name: placed_on
        roles:
          - concept: Date
        multiplicity: ManyToOne
        verbalizes:
          - "{Order} is placed on {Date}"
      - name: totals
        roles:
          - concept: Amount
        multiplicity: ManyToOne
        verbalizes:
          - "{Order} totals {Amount}"`
    },
    {
      id: 'rules',
      title: 'Business Rules',
      description: 'Business rules make the ontology precise. requires declares constraints that always hold: amounts are never negative, and every order has a customer and a date. derived_by defines a concept from others, like a view: a LargeOrder is any order that totals 1,000 or more.',
      code: `version: "0.2.0.dev0"
name: ecommerce
ontology:
  - concept: Amount
    type: ValueType
    extends: [Integer]
# !focus(1:1)
    requires: [ "Amount >= 0" ]
  - concept: Order
    type: EntityType
    identify_by: [ nr ]
# !focus(1:1)
    requires: [ "Order.placed_by", "Order.placed_on" ]
    relationships:
      - name: totals
        roles:
          - concept: Amount
        multiplicity: ManyToOne
        verbalizes:
          - "{Order} totals {Amount}"
# !focus(1:5)
  - concept: LargeOrder
    type: EntityType
    extends: [Order]
    description: An order of 1,000 or more
    derived_by: [ "Order.totals >= 100000" ]`
    },
    {
      id: 'mappings',
      title: 'Ontology Mappings',
      description: 'Ontology mappings connect concepts to data. Each mapping embeds a semantic model and populates concepts and relationships from its fields. Every row in orders becomes an Order, linked to the Customer who placed it and to its total. Agents can now translate a question about customers into a query on the right tables.',
      code: `version: "0.2.0.dev0"
name: ecommerce
ontology:
  - concept: Customer
    type: EntityType
  - concept: Order
    type: EntityType
# !focus(1:29)
ontology_mappings:
  - name: ecommerce_mapping
    semantic_model:
      version: "0.2.0.dev0"
      name: ecommerce
      datasets:
        - name: customers
          source: analytics.customers
        - name: orders
          source: analytics.orders
    concept_mappings:
      - concept: Customer
        object_mappings:
          - expression: customers.customer_id
      - concept: Order
        object_mappings:
          - expression: orders.order_id
        link_mappings:
          - object_mapping:
              expression: orders.order_id
            children:
              - object_mapping:
                  concept: Customer
                  expression: orders.customer_id
                relationship: placed_by
              - object_mapping:
                  concept: Amount
                  expression: orders.order_total
                relationship: totals`
    },
  ],
}
