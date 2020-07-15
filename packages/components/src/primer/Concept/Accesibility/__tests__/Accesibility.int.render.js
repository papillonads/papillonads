import React from 'react'

const Accesibility =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Accesibility
    : require('../../../../../build').primer.Concept.Accesibility

export function renderSpecificationsStandardsGuidelines() {
  return <Accesibility.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <Accesibility.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <Accesibility.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <Accesibility.Implementation.ProductMicrosites />
}
