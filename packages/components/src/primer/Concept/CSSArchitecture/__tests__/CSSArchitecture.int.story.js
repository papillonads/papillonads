import React from 'react'
import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const CSSArchitecture =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.CSSArchitecture
    : require('../../../../../build').primer.Concept.CSSArchitecture

export default {
  title: 'Primer/Template/Concept/CSSArchitecture',
  component: CSSArchitecture,
  decorators: [withTests({ results })],
  parameters: { jest: ['CSSArchitecture.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <CSSArchitecture.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <CSSArchitecture.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <CSSArchitecture.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <CSSArchitecture.Implementation.ProductMicrosites />
}
