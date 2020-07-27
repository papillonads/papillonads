import React from 'react'

const ContinuousDelivery =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.ContinuousDelivery
    : require('../../../../../build').primer.Concept.ContinuousDelivery

export function renderSpecificationsStandardsGuidelines() {
  return <ContinuousDelivery.SpecificationsStandardsGuidelines />
}

export function renderOpenSourceDependencyProjects() {
  return <ContinuousDelivery.OpenSourceDependencyProjects />
}

export function renderDesignSystemCore() {
  return <ContinuousDelivery.Implementation.DesignSystemCore />
}

export function renderProductMicrosites() {
  return <ContinuousDelivery.Implementation.ProductMicrosites />
}
