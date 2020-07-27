import React from 'react'

const Microsite =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Microsite
    : require('../../../../../build').primer.Concept.Microsite

export function renderSpecificationsStandardsGuidelines() {
  return <Microsite.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <Microsite.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <Microsite.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <Microsite.Implementation.ProductMicrosites />
}
