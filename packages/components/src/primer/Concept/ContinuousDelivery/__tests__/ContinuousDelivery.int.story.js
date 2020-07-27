import { storiesOf } from '@storybook/react'
import {
  renderSpecificationsStandardsGuidelines,
  renderOpenSourceDependencyProjects,
  renderDesignSystemCore,
  renderProductMicrosites,
} from './ContinuousDelivery.int.render'
import notes from '../ContinuousDelivery.md'

storiesOf('Primer|Atom/Concept/ContinuousDelivery', module)
  .add('SpecificationsStandardsGuidelines', renderSpecificationsStandardsGuidelines, {
    notes,
  })
  .add('OpenSourceDependencyProjects', renderOpenSourceDependencyProjects, {
    notes,
  })

storiesOf('Primer|Atom/Concept/ContinuousDelivery/Implementation', module)
  .add('DesignSystemCore', renderDesignSystemCore, {
    notes,
  })
  .add('ProductMicrosites', renderProductMicrosites, {
    notes,
  })
