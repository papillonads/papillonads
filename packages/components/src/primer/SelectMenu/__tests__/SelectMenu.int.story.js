import { storiesOf } from '@storybook/react'
import { renderDefault } from './SelectMenu.int.render'
import notes from '../SelectMenu.md'

storiesOf('Primer|Atom/SelectMenu', module).add('Default', renderDefault, { notes })
