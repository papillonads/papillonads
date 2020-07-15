import { storiesOf } from '@storybook/react'
import {
  renderSpecificationsStandardsGuidelines,
  renderOpenSourceDependencyProjects,
  renderDesignSystemCore,
  renderProductMicrosites,
} from './ApplicationArchitecture.int.render'
import notes from '../ApplicationArchitecture.md'

storiesOf('Primer|Atom/Concept/ApplicationArchitecture', module)
  .add('SpecificationsStandardsGuidelines', renderSpecificationsStandardsGuidelines, {
    notes,
  })
  .add('OpenSourceDependencyProjects', renderOpenSourceDependencyProjects, {
    notes,
  })

storiesOf('Primer|Atom/Concept/ApplicationArchitecture/Implementation', module)
  .add('DesignSystemCore', renderDesignSystemCore, {
    notes,
  })
  .add('ProductMicrosites', renderProductMicrosites, {
    notes,
  })
