import { storiesOf } from '@storybook/react'
import { renderDefault, renderAllIcons } from './Icon.int.render'
import notes from '../Icon.md'

storiesOf('Primer|Atom/Icon', module).add('Default', renderDefault, { notes }).add('AllIcons', renderAllIcons, { notes })
