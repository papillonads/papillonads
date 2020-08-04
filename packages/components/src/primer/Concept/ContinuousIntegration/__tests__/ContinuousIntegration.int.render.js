import React from 'react'

const ContinuousIntegration =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.ContinuousIntegration
    : require('../../../../../build').primer.Concept.ContinuousIntegration

export function renderSpecificationsStandardsGuidelines() {
  return <ContinuousIntegration.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <ContinuousIntegration.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <ContinuousIntegration.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <ContinuousIntegration.Implementation.ProductMicrosites />
}
