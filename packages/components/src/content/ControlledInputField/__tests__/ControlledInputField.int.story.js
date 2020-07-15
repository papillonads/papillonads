import { storiesOf } from '@storybook/react'
import {
  renderDefault,
  renderWithAdditionalClassName,
  renderAsRequired,
  renderWithHelpText,
  renderWithValidationMessage,
  renderAsDisabled,
  renderWithLightLabelVariation,
  renderAsChecked,
  renderWithValue,
  renderWithNoA11yIsues,
} from './ControlledInputField.int.render'
import notes from '../ControlledInputField.md'

storiesOf('Content|Molecule/ControlledInputField', module)
  .add('Default', renderDefault, { notes })
  .add('WithAdditionalClassName', renderWithAdditionalClassName, { notes })
  .add('AsRequired', renderAsRequired, { notes })
  .add('WithHelpText', renderWithHelpText, { notes })
  .add('WithValidationMessage', renderWithValidationMessage, { notes })
  .add('AsDisabled', renderAsDisabled, { notes })
  .add('WithLightLabelVariation', renderWithLightLabelVariation, { notes })
  .add('AsChecked', renderAsChecked, { notes })
  .add('WithValue', renderWithValue, { notes })
  .add('WithNoA11yIsues', renderWithNoA11yIsues, { notes })
