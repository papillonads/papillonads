import React from 'react'

const Compiling =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Compiling
    : require('../../../../../build').primer.Concept.Compiling

export function renderSpecificationsStandardsGuidelines() {
  return <Compiling.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <Compiling.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <Compiling.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <Compiling.Implementation.ProductMicrosites />
}
