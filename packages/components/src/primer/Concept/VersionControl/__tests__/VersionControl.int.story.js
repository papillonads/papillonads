import React from 'react'
import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const VersionControl =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.VersionControl
    : require('../../../../../build').primer.Concept.VersionControl

export default {
  title: 'Primer/Template/Concept/VersionControl',
  component: VersionControl,
  decorators: [withTests({ results })],
  parameters: { jest: ['VersionControl.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <VersionControl.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <VersionControl.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <VersionControl.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <VersionControl.Implementation.ProductMicrosites />
}
