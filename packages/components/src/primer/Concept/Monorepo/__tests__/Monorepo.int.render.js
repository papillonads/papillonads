import React from 'react'

const Monorepo =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Monorepo
    : require('../../../../../build').primer.Concept.Monorepo

export function renderSpecificationsStandardsGuidelines() {
  return <Monorepo.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <Monorepo.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <Monorepo.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <Monorepo.Implementation.ProductMicrosites />
}
