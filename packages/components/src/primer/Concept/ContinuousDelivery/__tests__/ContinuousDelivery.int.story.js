import React from 'react'
import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const ContinuousDelivery =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.ContinuousDelivery
    : require('../../../../../build').primer.Concept.ContinuousDelivery

export default {
  title: 'Primer/Template/Concept/ContinuousDelivery',
  component: ContinuousDelivery,
  decorators: [withTests({ results })],
  parameters: { jest: ['ContinuousDelivery.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <ContinuousDelivery.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <ContinuousDelivery.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <ContinuousDelivery.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <ContinuousDelivery.Implementation.ProductMicrosites />
}
