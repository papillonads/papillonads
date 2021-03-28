import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const Testing =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Testing
    : require('../../../../../build').primer.Concept.Testing

export default {
  title: 'Primer/Template/Concept/Testing',
  component: Testing,
  decorators: [withTests({ results })],
  parameters: { jest: ['Testing.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <Testing.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <Testing.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <Testing.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <Testing.Implementation.ProductMicrosites />
}
