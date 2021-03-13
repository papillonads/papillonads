import { storiesOf } from '@storybook/react'
import { renderDefault, renderWithAdditionalClassName, renderWithNoA11yIsues } from './ValidationMessage.int.render'
import notes from '../ValidationMessage.md'

storiesOf('Content|Molecule/ValidationMessage', module)
  .add('Default', renderDefault, { notes })
  .add('WithAdditionalClassName', renderWithAdditionalClassName, { notes })
  .add('WithNoA11yIsues', renderWithNoA11yIsues, { notes })
