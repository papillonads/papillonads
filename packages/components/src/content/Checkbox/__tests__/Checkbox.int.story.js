import { storiesOf } from '@storybook/react'
import { renderDefault, renderWithAdditionalClassName, renderWithNoA11yIsues } from './Checkbox.int.render'
import notes from '../Checkbox.md'

storiesOf('Content|Molecule/Checkbox', module)
  .add('Default', renderDefault, { notes })
  .add('WithAdditionalClassName', renderWithAdditionalClassName, { notes })
  .add('WithNoA11yIsues', renderWithNoA11yIsues, { notes })
