import React from 'react'
import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const ComponentDesign =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.ComponentDesign
    : require('../../../../../build').primer.Concept.ComponentDesign

export default {
  title: 'Primer/Template/Concept/ComponentDesign',
  component: ComponentDesign,
  decorators: [withTests({ results })],
  parameters: { jest: ['ComponentDesign.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <ComponentDesign.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <ComponentDesign.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <ComponentDesign.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <ComponentDesign.Implementation.ProductMicrosites />
}
