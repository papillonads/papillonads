import React from 'react'
import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const CodeStyle =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.CodeStyle
    : require('../../../../../build').primer.Concept.CodeStyle

export default {
  title: 'Primer/Template/Concept/CodeStyle',
  component: CodeStyle,
  decorators: [withTests({ results })],
  parameters: { jest: ['CodeStyle.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <CodeStyle.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <CodeStyle.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <CodeStyle.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <CodeStyle.Implementation.ProductMicrosites />
}
