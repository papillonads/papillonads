import { storiesOf } from '@storybook/react'
import { renderDefault } from './PreviousNext.int.render'
import notes from '../PreviousNext.md'

storiesOf('Primer|Atom/Pagination/PreviousNext', module).add('Default', renderDefault, { notes })
