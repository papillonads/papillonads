import React from 'react'

const ComponentDrivenDevelopment =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.ComponentDrivenDevelopment
    : require('../../../../../build').primer.Concept.ComponentDrivenDevelopment

export function renderSpecificationsStandardsGuidelines() {
  return <ComponentDrivenDevelopment.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <ComponentDrivenDevelopment.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <ComponentDrivenDevelopment.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <ComponentDrivenDevelopment.Implementation.ProductMicrosites />
}
