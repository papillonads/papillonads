import { storiesOf } from '@storybook/react'
import {
  renderSpecificationsStandardsGuidelines,
  renderOpenSourceDependencyProjects,
  renderDesignSystemCore,
  renderProductMicrosites,
} from './Runtime.int.render'
import notes from '../Runtime.md'

storiesOf('Primer|Atom/Concept/Runtime', module)
  .add('SpecificationsStandardsGuidelines', renderSpecificationsStandardsGuidelines, {
    notes,
  })
  .add('OpenSourceDependencyProjects', renderOpenSourceDependencyProjects, {
    notes,
  })

storiesOf('Primer|Atom/Concept/Runtime/Implementation', module)
  .add('DesignSystemCore', renderDesignSystemCore, {
    notes,
  })
  .add('ProductMicrosites', renderProductMicrosites, {
    notes,
  })
