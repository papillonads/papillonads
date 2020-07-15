import { storiesOf } from '@storybook/react'
import { renderDefault, renderNarrow, renderCapped, renderSpacious, renderLarge, renderCleanBackground } from './Blankslate.int.render'
import notes from '../Blankslate.md'

storiesOf('Primer|Atom/Blankslate', module)
  .add('Default', renderDefault, { notes })
  .add('Narrow', renderNarrow, { notes })
  .add('Capped', renderCapped, { notes })
  .add('Spacious', renderSpacious, { notes })
  .add('Large', renderLarge, { notes })
  .add('CleanBackground', renderCleanBackground, { notes })
