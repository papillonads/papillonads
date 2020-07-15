import { storiesOf } from '@storybook/react'
import { renderDefault } from './Button.int.render'
import notes from '../Button.md'

storiesOf('Content|Molecule/Button', module).add('Default', renderDefault, { notes })
