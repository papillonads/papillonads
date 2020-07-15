import { storiesOf } from '@storybook/react'
import {
  renderDefault,
  renderWithActions,
  renderRightAligned,
  renderRightAlignedWithActions,
  renderWithIcons,
  renderFullContainer,
} from './UnderlineNav.int.render'
import notes from '../UnderlineNav.md'

storiesOf('Primer|Atom/Navigation/UnderlineNav', module)
  .add('Default', renderDefault, { notes })
  .add('WithActions', renderWithActions, { notes })
  .add('RightAligned', renderRightAligned, { notes })
  .add('RightAlignedWithActions', renderRightAlignedWithActions, { notes })
  .add('WithIcons', renderWithIcons, { notes })
  .add('FullContainer', renderFullContainer, { notes })
