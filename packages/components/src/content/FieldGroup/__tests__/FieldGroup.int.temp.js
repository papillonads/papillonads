import { storiesOf } from '@storybook/react'
import { renderDefault } from './FieldGroup.int.render'
import notes from '../FieldGroup.md'

storiesOf('Content|Atom/FieldGroup', module).add('Default', renderDefault, { notes })
