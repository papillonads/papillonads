import { storiesOf } from '@storybook/react'
import { renderNormal, renderLarge, renderSmall } from './Progress.int.render'
import notes from '../Progress.md'

storiesOf('Primer|Atom/Progress', module)
  .add('Normal', renderNormal, { notes })
  .add('Large', renderLarge, { notes })
  .add('Small', renderSmall, { notes })
