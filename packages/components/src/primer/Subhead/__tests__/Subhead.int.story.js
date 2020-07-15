import { storiesOf } from '@storybook/react'
import { renderDefault, renderIsSpacious } from './Subhead.int.render'
import notes from '../Subhead.md'

storiesOf('Primer|Atom/Subhead', module).add('Plain', renderDefault, { notes }).add('Spacious', renderIsSpacious, { notes })
