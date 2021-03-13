import { storiesOf } from '@storybook/react'
import { renderDefault, renderWithAdditionalClassName, renderWithImageType, renderWithNoA11yIsues } from './AssetIcon.int.render'
import notes from '../AssetIcon.md'

storiesOf('Content|Atom/AssetIcon', module)
  .add('Default', renderDefault, { notes })
  .add('WithAdditionalClassName', renderWithAdditionalClassName, { notes })
  .add('WithImageType', renderWithImageType, { notes })
  .add('WithNoA11yIsues', renderWithNoA11yIsues, { notes })
