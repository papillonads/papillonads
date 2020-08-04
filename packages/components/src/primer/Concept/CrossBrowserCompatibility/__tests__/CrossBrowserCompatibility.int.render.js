import React from 'react'

const CrossBrowserCompatibility =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.CrossBrowserCompatibility
    : require('../../../../../build').primer.Concept.CrossBrowserCompatibility

export function renderSpecificationsStandardsGuidelines() {
  return <CrossBrowserCompatibility.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <CrossBrowserCompatibility.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <CrossBrowserCompatibility.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <CrossBrowserCompatibility.Implementation.ProductMicrosites />
}
