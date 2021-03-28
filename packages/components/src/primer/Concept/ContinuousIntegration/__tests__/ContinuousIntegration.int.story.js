import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const ContinuousIntegration =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.ContinuousIntegration
    : require('../../../../../build').primer.Concept.ContinuousIntegration

export default {
  title: 'Primer/Template/Concept/ContinuousIntegration',
  component: ContinuousIntegration,
  decorators: [withTests({ results })],
  parameters: { jest: ['ContinuousIntegration.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <ContinuousIntegration.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <ContinuousIntegration.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <ContinuousIntegration.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <ContinuousIntegration.Implementation.ProductMicrosites />
}
