import React from 'react'

const CSSArchitecture =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.CSSArchitecture
    : require('../../../../../build').primer.Concept.CSSArchitecture

export function renderSpecificationsStandardsGuidelines() {
  return <CSSArchitecture.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <CSSArchitecture.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <CSSArchitecture.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <CSSArchitecture.Implementation.ProductMicrosites />
}
