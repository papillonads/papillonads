import React from 'react'
import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const LocalDevelopment =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.LocalDevelopment
    : require('../../../../../build').primer.Concept.LocalDevelopment

export default {
  title: 'Primer/Template/Concept/LocalDevelopment',
  component: LocalDevelopment,
  decorators: [withTests({ results })],
  parameters: { jest: ['LocalDevelopment.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <LocalDevelopment.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <LocalDevelopment.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <LocalDevelopment.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <LocalDevelopment.Implementation.ProductMicrosites />
}
