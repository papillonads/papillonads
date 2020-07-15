import { storiesOf } from '@storybook/react'
import { renderDefault, renderWithIcons, renderWithHeading } from './Menu.int.render'
import notes from '../Menu.md'

storiesOf('Primer|Atom/Navigation/Menu', module)
  .add('Default', renderDefault, { notes })
  .add('WithIcons', renderWithIcons, { notes })
  .add('WithHeading', renderWithHeading, { notes })
