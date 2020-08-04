import React from 'react'

const Runtime =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Runtime
    : require('../../../../../build').primer.Concept.Runtime

export function renderSpecificationsStandardsGuidelines() {
  return <Runtime.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <Runtime.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <Runtime.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <Runtime.Implementation.ProductMicrosites />
}
