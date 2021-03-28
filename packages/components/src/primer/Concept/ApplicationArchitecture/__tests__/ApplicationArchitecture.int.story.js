import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const ApplicationArchitecture =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.ApplicationArchitecture
    : require('../../../../../build').primer.Concept.ApplicationArchitecture

export default {
  title: 'Primer/Template/Concept/ApplicationArchitecture',
  component: ApplicationArchitecture,
  decorators: [withTests({ results })],
  parameters: { jest: ['ApplicationArchitecture.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <ApplicationArchitecture.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <ApplicationArchitecture.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <ApplicationArchitecture.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <ApplicationArchitecture.Implementation.ProductMicrosites />
}
