import { storiesOf } from '@storybook/react'
import { renderDefault, renderWithAdditionalClassName, renderWithCopyValue, renderWithNoA11yIsues } from './CopyButton.int.render'
import notes from '../CopyButton.md'

storiesOf('Content|Molecule/CopyButton', module)
  .add('Default', renderDefault, { notes })
  .add('WithAdditionalClassName', renderWithAdditionalClassName, { notes })
  .add('WithCopyValue', renderWithCopyValue, { notes })
  .add('WithNoA11yIsues', renderWithNoA11yIsues, { notes })
