import { storiesOf } from '@storybook/react'
import {
  renderDefault,
  renderWithAdditionalClassName,
  renderAsRequired,
  renderAsDisabled,
  renderAsChecked,
  renderWithValue,
  renderWithNoA11yIsues,
} from './ControlledInput.int.render'
import notes from '../ControlledInput.md'

storiesOf('Content|Atom/ControlledInput', module)
  .add('Default', renderDefault, { notes })
  .add('WithAdditionalClassName', renderWithAdditionalClassName, { notes })
  .add('AsRequired', renderAsRequired, { notes })
  .add('AsDisabled', renderAsDisabled, { notes })
  .add('AsChecked', renderAsChecked, { notes })
  .add('WithValue', renderWithValue, { notes })
  .add('WithNoA11yIsues', renderWithNoA11yIsues, { notes })
