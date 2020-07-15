import { storiesOf } from '@storybook/react'
import { renderDefault } from './Label.int.render'
import notes from '../Label.md'

storiesOf('Primer|Atom/Label', module).add('Default', renderDefault, { notes })
