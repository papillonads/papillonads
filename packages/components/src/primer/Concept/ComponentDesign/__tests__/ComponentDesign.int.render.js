import React from 'react'

const ComponentDesign =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.ComponentDesign
    : require('../../../../../build').primer.Concept.ComponentDesign

export function renderSpecificationsStandardsGuidelines() {
  return <ComponentDesign.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <ComponentDesign.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <ComponentDesign.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <ComponentDesign.Implementation.ProductMicrosites />
}
