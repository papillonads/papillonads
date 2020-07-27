import React from 'react'

const Routing =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Routing
    : require('../../../../../build').primer.Concept.Routing

export function renderSpecificationsStandardsGuidelines() {
  return <Routing.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <Routing.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <Routing.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <Routing.Implementation.ProductMicrosites />
}
