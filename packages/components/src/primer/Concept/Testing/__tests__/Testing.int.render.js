import React from 'react'

const Testing =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Testing
    : require('../../../../../build').primer.Concept.Testing

export function renderSpecificationsStandardsGuidelines() {
  return <Testing.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <Testing.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <Testing.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <Testing.Implementation.ProductMicrosites />
}
