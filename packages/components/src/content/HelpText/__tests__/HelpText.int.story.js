import { storiesOf } from '@storybook/react'
import { renderDefault, renderWithLink } from './HelpText.int.render'
import notes from '../HelpText.md'

storiesOf('Content|Atom/HelpText', module).add('Default', renderDefault, { notes }).add('WithLink', renderWithLink, { notes })
