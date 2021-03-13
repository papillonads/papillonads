import React from 'react'
import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const Accessibility =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Accessibility
    : require('../../../../../build').primer.Concept.Accessibility

export default {
  title: 'Primer/Template/Concept/Accessibility',
  component: Accessibility,
  decorators: [withTests({ results })],
  parameters: { jest: ['Accessibility.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <Accessibility.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <Accessibility.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <Accessibility.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <Accessibility.Implementation.ProductMicrosites />
}
