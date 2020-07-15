import { storiesOf } from '@storybook/react'
import { renderDefault } from './DisplayTable.int.render'
import notes from '../DisplayTable.md'

storiesOf('Primer|Atom/Grid/DisplayTable', module).add('Default', renderDefault, { notes })
