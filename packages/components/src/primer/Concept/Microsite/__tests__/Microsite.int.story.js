import { storiesOf } from '@storybook/react'
import {
  renderSpecificationsStandardsGuidelines,
  renderOpenSourceDependencyProjects,
  renderDesignSystemCore,
  renderProductMicrosites,
} from './Microsite.int.render'
import notes from '../Microsite.md'

storiesOf('Primer|Atom/Concept/Microsite', module)
  .add('SpecificationsStandardsGuidelines', renderSpecificationsStandardsGuidelines, {
    notes,
  })
  .add('OpenSourceDependencyProjects', renderOpenSourceDependencyProjects, {
    notes,
  })

storiesOf('Primer|Atom/Concept/Microsite/Implementation', module)
  .add('DesignSystemCore', renderDesignSystemCore, {
    notes,
  })
  .add('ProductMicrosites', renderProductMicrosites, {
    notes,
  })
