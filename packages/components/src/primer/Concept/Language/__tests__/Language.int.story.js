import React from 'react'
import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const Language =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Language
    : require('../../../../../build').primer.Concept.Language

export default {
  title: 'Primer/Template/Concept/Language',
  component: Language,
  decorators: [withTests({ results })],
  parameters: { jest: ['Language.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <Language.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <Language.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <Language.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <Language.Implementation.ProductMicrosites />
}
