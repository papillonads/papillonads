import { storiesOf } from '@storybook/react'
import { renderHeading, renderText, renderLabel, renderButton } from './Loader.int.render'
import notes from '../Loader.md'

storiesOf('Primer|Atom/Loader', module)
  .add('Heading', renderHeading, { notes })
  .add('Text', renderText, { notes })
  .add('Label', renderLabel, { notes })
  .add('Button', renderButton, { notes })
