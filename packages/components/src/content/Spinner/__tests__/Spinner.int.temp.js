import { storiesOf } from '@storybook/react'
import { renderDefault, renderWithInlineText } from './Spinner.int.render'
import notes from '../Spinner.md'

storiesOf('Content|Atom/Spinner', module).add('Default', renderDefault, { notes }).add('WithInlineText', renderWithInlineText, { notes })
