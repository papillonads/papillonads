import { storiesOf } from '@storybook/react'
import { renderIsChecked, renderIsNotChecked } from './Checkbox.int.render'
import notes from '../Checkbox.md'

storiesOf('Primer|Atom/Form/Checkbox', module)
  .add('IsChecked', renderIsChecked, { notes })
  .add('IsNotChecked', renderIsNotChecked, { notes })
