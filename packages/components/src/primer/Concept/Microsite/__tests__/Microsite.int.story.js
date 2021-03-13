import React from 'react'
import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const Microsite =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Microsite
    : require('../../../../../build').primer.Concept.Microsite

export default {
  title: 'Primer/Template/Concept/Microsite',
  component: Microsite,
  decorators: [withTests({ results })],
  parameters: { jest: ['Microsite.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <Microsite.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <Microsite.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <Microsite.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <Microsite.Implementation.ProductMicrosites />
}
