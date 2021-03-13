import { storiesOf } from '@storybook/react'
import { renderDefault } from './EditorToolbar.int.render'
import notes from '../EditorToolbar.md'

storiesOf('Content|Molecule/EditorToolbar', module).add('Default', renderDefault, { notes })
