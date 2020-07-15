import { storiesOf } from '@storybook/react'
import { renderDefault } from './EditorToolbarButton.int.render'
import notes from '../EditorToolbarButton.md'

storiesOf('Content|Molecule/EditorToolbarButton', module).add('Default', renderDefault, { notes })
