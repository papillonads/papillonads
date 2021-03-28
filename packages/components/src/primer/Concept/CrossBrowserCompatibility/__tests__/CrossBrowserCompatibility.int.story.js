import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const CrossBrowserCompatibility =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.CrossBrowserCompatibility
    : require('../../../../../build').primer.Concept.CrossBrowserCompatibility

export default {
  title: 'Primer/Template/Concept/CrossBrowserCompatibility',
  component: CrossBrowserCompatibility,
  decorators: [withTests({ results })],
  parameters: { jest: ['CrossBrowserCompatibility.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <CrossBrowserCompatibility.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <CrossBrowserCompatibility.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <CrossBrowserCompatibility.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <CrossBrowserCompatibility.Implementation.ProductMicrosites />
}
