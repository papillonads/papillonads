import { storiesOf } from '@storybook/react'
import {
  renderDefault,
  renderWithButtonActions,
  renderWithTextActions,
  renderWithLinkActions,
  renderWithNavigation,
} from './TabNav.int.render'
import notes from '../TabNav.md'

storiesOf('Primer|Atom/Navigation/TabNav', module)
  .add('Default', renderDefault, { notes })
  .add('WithButtonActions', renderWithButtonActions, { notes })
  .add('WithTextActions', renderWithTextActions, { notes })
  .add('WithLinkActions', renderWithLinkActions, { notes })
  .add('WithNavigation', renderWithNavigation, { notes })
