import { storiesOf } from '@storybook/react'
import {
  renderSpecificationsStandardsGuidelines,
  renderOpenSourceDependencyProjects,
  renderDesignSystemCore,
  renderProductMicrosites,
} from './Rendering.int.render'
import notes from '../Rendering.md'

storiesOf('Primer|Atom/Concept/Rendering', module)
  .add('SpecificationsStandardsGuidelines', renderSpecificationsStandardsGuidelines, {
    notes,
  })
  .add('OpenSourceDependencyProjects', renderOpenSourceDependencyProjects, {
    notes,
  })

storiesOf('Primer|Atom/Concept/Rendering/Implementation', module)
  .add('DesignSystemCore', renderDesignSystemCore, {
    notes,
  })
  .add('ProductMicrosites', renderProductMicrosites, {
    notes,
  })
