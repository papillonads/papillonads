import { storiesOf } from '@storybook/react'
import { renderDefault } from './Breadcrumb.int.render'
import notes from '../Breadcrumb.md'

storiesOf('Primer|Atom/Breadcrumb', module).add('Default', renderDefault, { notes })
