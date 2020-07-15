import { storiesOf } from '@storybook/react'
import { renderDefault } from './CheckboxField.int.render'
import notes from '../CheckboxField.md'

storiesOf('Content|Molecule/CheckboxField', module).add('Default', renderDefault, { notes })
