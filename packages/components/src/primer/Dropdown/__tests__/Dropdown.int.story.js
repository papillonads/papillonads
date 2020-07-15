import { storiesOf } from '@storybook/react'
import { renderDefault } from './Dropdown.int.render'
import notes from '../Dropdown.md'

storiesOf('Primer|Atom/Dropdown', module).add('Default', renderDefault, { notes })
