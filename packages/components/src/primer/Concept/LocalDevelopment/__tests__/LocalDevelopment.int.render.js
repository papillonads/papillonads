import React from 'react'

const LocalDevelopment =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.LocalDevelopment
    : require('../../../../../build').primer.Concept.LocalDevelopment

export function renderSpecificationsStandardsGuidelines() {
  return <LocalDevelopment.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <LocalDevelopment.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <LocalDevelopment.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <LocalDevelopment.Implementation.ProductMicrosites />
}
