import { storiesOf } from '@storybook/react'
import {
  renderDefaultButton,
  renderDefaultSmallButton,
  renderDefaultLargeButton,
  renderDefaultDisabledButton,
  renderDefaultIconButtonLeftAligned,
  renderDefaultIconButtonRightAligned,
  renderDefaultLinkButton,
  renderPrimaryButton,
  renderPrimarySmallButton,
  renderPrimaryLargeButton,
  renderPrimaryDisabledButton,
  renderPrimaryIconButtonLeftAligned,
  renderPrimaryIconButtonRightAligned,
  renderDangerButton,
  renderDangerSmallButton,
  renderDangerLargeButton,
  renderDangerDisabledButton,
  renderDangerIconButtonLeftAligned,
  renderDangerIconButtonRightAligned,
  renderOutlineButton,
  renderOutlineSmallButton,
  renderOutlineLargeButton,
  renderOutlineDisabledButton,
  renderOutlineIconButtonLeftAligned,
  renderOutlineIconButtonRightAligned,
  renderBlueButton,
  renderBlueSmallButton,
  renderBlueLargeButton,
  renderBlueDisabledButton,
  renderBlueIconButtonLeftAligned,
  renderBlueIconButtonRightAligned,
  renderOrangeButton,
  renderOrangeSmallButton,
  renderOrangeLargeButton,
  renderOrangeDisabledButton,
  renderOrangeIconButtonLeftAligned,
  renderOrangeIconButtonRightAligned,
} from './Button.int.render'
import notes from '../Button.md'

storiesOf('Primer|Atom/Button', module)
  .add('DefaultButton', renderDefaultButton, { notes })
  .add('DefaultSmallButton', renderDefaultSmallButton, { notes })
  .add('DefaultLargeButton', renderDefaultLargeButton, { notes })
  .add('DefaultDisabledButton', renderDefaultDisabledButton, { notes })
  .add('DefaultIconButtonLeftAligned', renderDefaultIconButtonLeftAligned, { notes })
  .add('DefaultIconButtonRightAligned', renderDefaultIconButtonRightAligned, { notes })
  .add('DefaultLinkButton', renderDefaultLinkButton, { notes })
  .add('PrimaryButton', renderPrimaryButton, { notes })
  .add('PrimarySmallButton', renderPrimarySmallButton, { notes })
  .add('PrimaryLargeButton', renderPrimaryLargeButton, { notes })
  .add('PrimaryDisabledButton', renderPrimaryDisabledButton, { notes })
  .add('PrimaryIconButtonLeftAligned', renderPrimaryIconButtonLeftAligned, { notes })
  .add('PrimaryIconButtonRightAligned', renderPrimaryIconButtonRightAligned, { notes })
  .add('DangerButton', renderDangerButton, { notes })
  .add('DangerSmallButton', renderDangerSmallButton, { notes })
  .add('DangerLargeButton', renderDangerLargeButton, { notes })
  .add('DangerDisabledButton', renderDangerDisabledButton, { notes })
  .add('DangerIconButtonLeftAligned', renderDangerIconButtonLeftAligned, { notes })
  .add('DangerIconButtonRightAligned', renderDangerIconButtonRightAligned, { notes })
  .add('OutlineButton', renderOutlineButton, { notes })
  .add('OutlineSmallButton', renderOutlineSmallButton, { notes })
  .add('OutlineLargeButton', renderOutlineLargeButton, { notes })
  .add('OutlineDisabledButton', renderOutlineDisabledButton, { notes })
  .add('OutlineIconButtonLeftAligned', renderOutlineIconButtonLeftAligned, { notes })
  .add('OutlineIconButtonRightAligned', renderOutlineIconButtonRightAligned, { notes })
  .add('BlueButton', renderBlueButton, { notes })
  .add('BlueSmallButton', renderBlueSmallButton, { notes })
  .add('BlueLargeButton', renderBlueLargeButton, { notes })
  .add('BlueDisabledButton', renderBlueDisabledButton, { notes })
  .add('BlueIconButtonLeftAligned', renderBlueIconButtonLeftAligned, { notes })
  .add('BlueIconButtonRightAligned', renderBlueIconButtonRightAligned, { notes })
  .add('OrangeButton', renderOrangeButton, { notes })
  .add('OrangeSmallButton', renderOrangeSmallButton, { notes })
  .add('OrangeLargeButton', renderOrangeLargeButton, { notes })
  .add('OrangeDisabledButton', renderOrangeDisabledButton, { notes })
  .add('OrangeIconButtonLeftAligned', renderOrangeIconButtonLeftAligned, { notes })
  .add('OrangeIconButtonRightAligned', renderOrangeIconButtonRightAligned, { notes })
