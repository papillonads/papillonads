import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const Bootstrap =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Bootstrap
    : require('../../../../../build').primer.Concept.Bootstrap

export default {
  title: 'Primer/Template/Concept/Bootstrap',
  component: Bootstrap,
  decorators: [withTests({ results })],
  parameters: { jest: ['Bootstrap.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <Bootstrap.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <Bootstrap.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <Bootstrap.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <Bootstrap.Implementation.ProductMicrosites />
}
