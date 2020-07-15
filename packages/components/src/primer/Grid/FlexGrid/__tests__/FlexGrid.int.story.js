import { storiesOf } from '@storybook/react'
import {
  renderRadioWithSelection,
  renderRadioWithoutSelection,
  renderCheckboxWithSelection,
  renderCheckboxWithoutSelection,
} from './FlexGrid.int.render'
import notes from '../FlexGrid.md'

storiesOf('Primer|Atom/Grid/FlexGrid', module)
  .add('RadioWithSelection', renderRadioWithSelection, { notes })
  .add('RadioWithoutSelection', renderRadioWithoutSelection, { notes })
  .add('CheckboxWithSelection', renderCheckboxWithSelection, { notes })
  .add('CheckboxWithoutSelection', renderCheckboxWithoutSelection, { notes })
