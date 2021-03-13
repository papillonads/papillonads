import React from 'react'
import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const Compiling =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Compiling
    : require('../../../../../build').primer.Concept.Compiling

export default {
  title: 'Primer/Template/Concept/Compiling',
  component: Compiling,
  decorators: [withTests({ results })],
  parameters: { jest: ['Compiling.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <Compiling.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <Compiling.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <Compiling.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <Compiling.Implementation.ProductMicrosites />
}
