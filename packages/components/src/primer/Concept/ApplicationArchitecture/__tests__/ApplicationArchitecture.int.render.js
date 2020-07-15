import React from 'react'

const ApplicationArchitecture =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.ApplicationArchitecture
    : require('../../../../../build').primer.Concept.ApplicationArchitecture

export function renderSpecificationsStandardsGuidelines() {
  return <ApplicationArchitecture.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <ApplicationArchitecture.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <ApplicationArchitecture.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <ApplicationArchitecture.Implementation.ProductMicrosites />
}
