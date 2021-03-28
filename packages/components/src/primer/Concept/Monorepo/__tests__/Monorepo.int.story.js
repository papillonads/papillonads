import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../../.jest-test-results.json'

const Monorepo =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Concept.Monorepo
    : require('../../../../../build').primer.Concept.Monorepo

export default {
  title: 'Primer/Template/Concept/Monorepo',
  component: Monorepo,
  decorators: [withTests({ results })],
  parameters: { jest: ['Monorepo.int.test.js'] },
  excludeStories: ['custom'],
}

export function specificationsStandardsGuidelines() {
  return <Monorepo.SpecificationsStandardsGuidelines />
}

export function openSourceDependencyProjects() {
  return <Monorepo.OpenSourceDependencyProjects />
}

export function designSystemCore() {
  return <Monorepo.Implementation.DesignSystemCore />
}

export function productMicrosites() {
  return <Monorepo.Implementation.ProductMicrosites />
}
