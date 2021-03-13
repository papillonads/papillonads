import { storiesOf } from '@storybook/react'
import { renderDefault, renderWithAdditionalClassName, renderWithNoA11yIsues } from './RadioButton.int.render'
import notes from '../RadioButton.md'

storiesOf('Content|Molecule/RadioButton', module)
  .add('Default', renderDefault, { notes })
  .add('WithAdditionalClassName', renderWithAdditionalClassName, { notes })
  .add('WithNoA11yIsues', renderWithNoA11yIsues, { notes })
