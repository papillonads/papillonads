import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const ComponentDrivenDevelopment =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.ComponentDrivenDevelopment
    : require('../../../../../build').primer.Concept.ComponentDrivenDevelopment

export default {
  title: 'Primer/Template/Concept/ComponentDrivenDevelopment',
  component: ComponentDrivenDevelopment,
  decorators: [withTests({ results })],
  parameters: { jest: ['ComponentDrivenDevelopment.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <ComponentDrivenDevelopment.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <ComponentDrivenDevelopment.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <ComponentDrivenDevelopment.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <ComponentDrivenDevelopment.Implementation.ProductMicrosites />
}
