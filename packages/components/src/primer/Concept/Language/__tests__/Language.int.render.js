import React from 'react'

const Language =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Language
    : require('../../../../../build').primer.Concept.Language

export function renderSpecificationsStandardsGuidelines() {
  return <Language.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <Language.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <Language.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <Language.Implementation.ProductMicrosites />
}
