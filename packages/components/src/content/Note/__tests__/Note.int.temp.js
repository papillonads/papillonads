import { storiesOf } from '@storybook/react'
import { renderDefault, renderAllNotes } from './Note.int.render'
import notes from '../Note.md'

storiesOf('Content|Molecule/Note', module).add('Default', renderDefault, { notes }).add('AllIcons', renderAllNotes, { notes })
