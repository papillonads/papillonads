import React from 'react'

const CodeStyle =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.CodeStyle
    : require('../../../../../build').primer.Concept.CodeStyle

export function renderSpecificationsStandardsGuidelines() {
  return <CodeStyle.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <CodeStyle.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <CodeStyle.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <CodeStyle.Implementation.ProductMicrosites />
}
