import { storiesOf } from '@storybook/react'
import { renderDefault } from './Input.int.render'
import notes from '../Input.md'

storiesOf('Primer|Atom/Form/Input', module).add('Default', renderDefault, { notes })
