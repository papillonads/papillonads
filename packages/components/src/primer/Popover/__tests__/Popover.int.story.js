import { storiesOf } from '@storybook/react'
import {
  renderDefault,
  renderDefaultLarge,
  renderBottom,
  renderBottomRight,
  renderBottomLeft,
  // renderLeft,
  // renderLeftBottom,
  // renderLeftTop,
  // renderRight,
  // renderRightBottom,
  // renderRightTop,
  // renderTopLeft,
  // renderTopRight,
} from './Popover.int.render'
import notes from '../Popover.md'

storiesOf('Primer|Molecule/Popover', module)
  .add('Default', renderDefault, { notes })
  .add('DefaultLarge', renderDefaultLarge, { notes })
  .add('Bottom', renderBottom, { notes })
  .add('BottomRight', renderBottomRight, { notes })
  .add('BottomLeft', renderBottomLeft, { notes })
// .add('Left', renderLeft, { notes })
// .add('LeftBottom', renderLeftBottom, { notes })
// .add('LeftTop', renderLeftTop, { notes })
// .add('Right', renderRight, { notes })
// .add('RightBottom', renderRightBottom, { notes })
// .add('RightTop', renderRightTop, { notes })
// .add('TopLeft', renderTopLeft, { notes })
// .add('TopRight', renderTopRight, { notes })
