import { storiesOf } from '@storybook/react'
import { renderDefault, renderWithAdditionalClassName, renderAllIllustrations } from './Illustration.int.render'
import notes from '../Illustration.md'

storiesOf('Content|Atom/Illustration', module)
  .add('Default', renderDefault, { notes })
  .add('WithAdditionalClassName', renderWithAdditionalClassName, { notes })
  .add('AllIllustrations', renderAllIllustrations, { notes })
