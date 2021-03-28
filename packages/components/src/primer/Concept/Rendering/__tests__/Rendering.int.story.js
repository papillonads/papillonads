import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const Rendering =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Rendering
    : require('../../../../../build').primer.Concept.Rendering

export default {
  title: 'Primer/Template/Concept/Rendering',
  component: Rendering,
  decorators: [withTests({ results })],
  parameters: { jest: ['Rendering.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <Rendering.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <Rendering.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <Rendering.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <Rendering.Implementation.ProductMicrosites />
}
