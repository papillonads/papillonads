import { storiesOf } from '@storybook/react'
import { renderDefault, renderWithAdditionalClassName, renderWithNoA11yIsues } from './InViewport.int.render'
import notes from '../InViewport.md'

storiesOf('Content|Molecule/InViewport', module)
  .add('Default', renderDefault, { notes })
  .add('WithAdditionalClassName', renderWithAdditionalClassName, { notes })
  .add('WithNoA11yIsues', renderWithNoA11yIsues, { notes })
