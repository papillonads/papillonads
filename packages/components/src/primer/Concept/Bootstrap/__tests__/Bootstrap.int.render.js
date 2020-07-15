import React from 'react'

const Bootstrap =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Bootstrap
    : require('../../../../../build').primer.Concept.Bootstrap

export function renderSpecificationsStandardsGuidelines() {
  return <Bootstrap.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <Bootstrap.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <Bootstrap.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <Bootstrap.Implementation.ProductMicrosites />
}
