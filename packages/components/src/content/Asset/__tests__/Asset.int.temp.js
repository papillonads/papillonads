import { storiesOf } from '@storybook/react'
import { renderDefault, renderWithImage, renderWithArchivedImage } from './Asset.int.render'
import notes from '../Asset.md'

storiesOf('Content|Molecule/Asset', module)
  .add('Default', renderDefault, { notes })
  .add('WithImage', renderWithImage, { notes })
  .add('WithArchivedImage', renderWithArchivedImage, { notes })
