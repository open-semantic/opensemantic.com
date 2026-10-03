// Converts an Ossie ontology into the { nodes, edges } graph of the semantic visualizer.
// Entity types become nodes. Relationships to value types become properties of their entity,
// relationships between entity types become edges, and extends becomes an isA edge.

// "{Order} is placed by {Customer}" -> "is placed by"
function edgeLabel(relationship) {
  const verbalization = relationship.verbalizes?.[0]
  if (!verbalization) return relationship.name
  return verbalization.replace(/^\{[^}]+\}\s*/, '').replace(/\s*\{[^}]+\}$/, '')
}

export function ontologyToGraph(ontology) {
  const entityTypes = ontology.ontology.filter((concept) => concept.type === 'EntityType')
  const entityNames = new Set(entityTypes.map((concept) => concept.concept))
  const nodes = []
  const edges = []

  for (const concept of entityTypes) {
    const properties = []
    for (const relationship of concept.relationships ?? []) {
      const roles = relationship.roles ?? []
      if (roles.length !== 1) continue
      const target = roles[0].concept
      const id = `${concept.concept}.${relationship.name}`
      if (entityNames.has(target)) {
        edges.push({ id, source: concept.concept, target, label: edgeLabel(relationship), type: 'relatedTo', externalId: id })
      } else {
        properties.push({
          name: relationship.name,
          externalId: id,
          type: target,
          description: relationship.verbalizes?.[0],
          primaryKey: concept.identify_by?.includes(relationship.name),
        })
      }
    }

    const rules = [
      ...(concept.derived_by ?? []).map((expression) => `Derived by ${expression}.`),
      ...(concept.requires ?? []).map((expression) => `Requires ${expression}.`),
    ]
    nodes.push({
      id: concept.concept,
      type: 'entity',
      data: {
        label: concept.concept,
        externalId: concept.concept,
        description: [concept.description && `${concept.description}.`, ...rules].filter(Boolean).join(' '),
        properties,
      },
    })

    for (const parent of concept.extends ?? []) {
      if (entityNames.has(parent)) {
        const id = `${concept.concept}.extends.${parent}`
        edges.push({ id, source: concept.concept, target: parent, label: 'is a', type: 'isA', externalId: id })
      }
    }
  }

  return { nodes, edges }
}
