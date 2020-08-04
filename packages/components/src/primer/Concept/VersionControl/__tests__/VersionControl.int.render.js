import React from 'react'

const VersionControl =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.VersionControl
    : require('../../../../../build').primer.Concept.VersionControl

export function renderSpecificationsStandardsGuidelines() {
  return <VersionControl.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <VersionControl.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <VersionControl.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <VersionControl.Implementation.ProductMicrosites />
}
