import React from 'react'

const Rendering =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Rendering
    : require('../../../../../build').primer.Concept.Rendering

export function renderSpecificationsStandardsGuidelines() {
  return <Rendering.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <Rendering.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <Rendering.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <Rendering.Implementation.ProductMicrosites />
}
