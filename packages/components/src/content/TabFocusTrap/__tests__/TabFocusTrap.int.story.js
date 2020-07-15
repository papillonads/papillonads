import { storiesOf } from '@storybook/react'
import { renderDefault } from './TabFocusTrap.int.render'
import notes from '../TabFocusTrap.md'

storiesOf('Content|Molecule/TabFocusTrap', module).add('Default', renderDefault, { notes })
