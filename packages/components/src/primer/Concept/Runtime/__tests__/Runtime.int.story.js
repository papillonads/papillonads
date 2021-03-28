import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const Runtime =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Runtime
    : require('../../../../../build').primer.Concept.Runtime

export default {
  title: 'Primer/Template/Concept/Runtime',
  component: Runtime,
  decorators: [withTests({ results })],
  parameters: { jest: ['Runtime.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <Runtime.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <Runtime.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <Runtime.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <Runtime.Implementation.ProductMicrosites />
}
