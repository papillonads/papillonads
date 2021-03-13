import React from 'react'
import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const Routing =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Routing
    : require('../../../../../build').primer.Concept.Routing

export default {
  title: 'Primer/Template/Concept/Routing',
  component: Routing,
  decorators: [withTests({ results })],
  parameters: { jest: ['Routing.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <Routing.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <Routing.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <Routing.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <Routing.Implementation.ProductMicrosites />
}
