import { storiesOf } from '@storybook/react'
import { renderInfo, renderSuccess, renderWarning, renderError, renderIsDismissable } from './Toast.int.render'
import notes from '../Toast.md'

storiesOf('Primer|Atom/Toast', module)
  .add('Info', renderInfo, { notes })
  .add('Success', renderSuccess, { notes })
  .add('Warning', renderWarning, { notes })
  .add('Error', renderError, { notes })
  .add('IsDismissable', renderIsDismissable, { notes })
