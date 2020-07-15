import React from 'react'
import { action } from '@storybook/addon-actions'
import { buttonElement, buttonVariant, buttonSize, buttonState, iconAlignment } from '../Button.prop'
import { iconName } from '../../Icon/Icon.prop'

const Button =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Button.Button
    : require('../../../../build').primer.Button.Button

const plusIconLeftAligned = { name: iconName.Plus, alignment: iconAlignment.left }
const plusIconRightAligned = { name: iconName.Plus, alignment: iconAlignment.right }

export function renderCustom(element, onClick) {
  return <Button text="Custom button" element={element} onClick={onClick} />
}

export function renderDefaultButton() {
  return <Button text="Default button" onClick={action('onClick')} />
}

export function renderDefaultSmallButton() {
  return <Button text="Default small button" size={buttonSize.small} onClick={action('onClick')} />
}

export function renderDefaultLargeButton() {
  return <Button text="Default large button" size={buttonSize.large} onClick={action('onClick')} />
}

export function renderDefaultDisabledButton() {
  return <Button text="Default disabled button" state={buttonState.disabled} onClick={action('onClick')} />
}

export function renderDefaultIconButtonLeftAligned() {
  return <Button text="Default icon button" icon={plusIconLeftAligned} onClick={action('onClick')} />
}

export function renderDefaultIconButtonRightAligned() {
  return <Button text="Default icon button" icon={plusIconRightAligned} onClick={action('onClick')} />
}

export function renderDefaultLinkButton() {
  return <Button element={buttonElement.a} href="#url" text="Default link button" onClick={action('onClick')} />
}

export function renderPrimaryButton() {
  return <Button text="Primary button" variant={buttonVariant.primary} onClick={action('onClick')} />
}

export function renderPrimarySmallButton() {
  return <Button text="Primary small button" variant={buttonVariant.primary} size={buttonSize.small} onClick={action('onClick')} />
}

export function renderPrimaryLargeButton() {
  return <Button text="Primary large button" variant={buttonVariant.primary} size={buttonSize.large} onClick={action('onClick')} />
}

export function renderPrimaryDisabledButton() {
  return <Button text="Primary disabled button" variant={buttonVariant.primary} state={buttonState.disabled} onClick={action('onClick')} />
}

export function renderPrimaryIconButtonLeftAligned() {
  return <Button text="Primary icon button" variant={buttonVariant.primary} icon={plusIconLeftAligned} onClick={action('onClick')} />
}

export function renderPrimaryIconButtonRightAligned() {
  return <Button text="Primary icon button" variant={buttonVariant.primary} icon={plusIconRightAligned} onClick={action('onClick')} />
}

export function renderDangerButton() {
  return <Button text="Danger button" variant={buttonVariant.danger} onClick={action('onClick')} />
}

export function renderDangerSmallButton() {
  return <Button text="Danger small button" variant={buttonVariant.danger} size={buttonSize.small} onClick={action('onClick')} />
}

export function renderDangerLargeButton() {
  return <Button text="Danger large button" variant={buttonVariant.danger} size={buttonSize.large} onClick={action('onClick')} />
}

export function renderDangerDisabledButton() {
  return <Button text="Danger disabled button" variant={buttonVariant.danger} state={buttonState.disabled} onClick={action('onClick')} />
}

export function renderDangerIconButtonLeftAligned() {
  return <Button text="Danger icon button" variant={buttonVariant.danger} icon={plusIconLeftAligned} onClick={action('onClick')} />
}

export function renderDangerIconButtonRightAligned() {
  return <Button text="Danger icon button" variant={buttonVariant.danger} icon={plusIconRightAligned} onClick={action('onClick')} />
}

export function renderOutlineButton() {
  return <Button text="Outline button" variant={buttonVariant.outline} onClick={action('onClick')} />
}

export function renderOutlineSmallButton() {
  return <Button text="Outline small button" variant={buttonVariant.outline} size={buttonSize.small} onClick={action('onClick')} />
}

export function renderOutlineLargeButton() {
  return <Button text="Outline large button" variant={buttonVariant.outline} size={buttonSize.large} onClick={action('onClick')} />
}

export function renderOutlineDisabledButton() {
  return <Button text="Outline disabled button" variant={buttonVariant.outline} state={buttonState.disabled} onClick={action('onClick')} />
}

export function renderOutlineIconButtonLeftAligned() {
  return <Button text="Outline icon button" variant={buttonVariant.outline} icon={plusIconLeftAligned} onClick={action('onClick')} />
}

export function renderOutlineIconButtonRightAligned() {
  return <Button text="Outline icon button" variant={buttonVariant.outline} icon={plusIconRightAligned} onClick={action('onClick')} />
}

export function renderBlueButton() {
  return <Button text="Blue button" variant={buttonVariant.blue} onClick={action('onClick')} />
}

export function renderBlueSmallButton() {
  return <Button text="Blue small button" variant={buttonVariant.blue} size={buttonSize.small} onClick={action('onClick')} />
}

export function renderBlueLargeButton() {
  return <Button text="Blue large button" variant={buttonVariant.blue} size={buttonSize.large} onClick={action('onClick')} />
}

export function renderBlueDisabledButton() {
  return <Button text="Blue disabled button" variant={buttonVariant.blue} state={buttonState.disabled} onClick={action('onClick')} />
}

export function renderBlueIconButtonLeftAligned() {
  return <Button text="Blue icon button" variant={buttonVariant.blue} icon={plusIconLeftAligned} onClick={action('onClick')} />
}

export function renderBlueIconButtonRightAligned() {
  return <Button text="Blue icon button" variant={buttonVariant.blue} icon={plusIconRightAligned} onClick={action('onClick')} />
}

export function renderOrangeButton() {
  return <Button text="Orange button" variant={buttonVariant.orange} onClick={action('onClick')} />
}

export function renderOrangeSmallButton() {
  return <Button text="Orange small button" variant={buttonVariant.orange} size={buttonSize.small} onClick={action('onClick')} />
}

export function renderOrangeLargeButton() {
  return <Button text="Orange large button" variant={buttonVariant.orange} size={buttonSize.large} onClick={action('onClick')} />
}

export function renderOrangeDisabledButton() {
  return <Button text="Orange disabled button" variant={buttonVariant.orange} state={buttonState.disabled} onClick={action('onClick')} />
}

export function renderOrangeIconButtonLeftAligned() {
  return <Button text="Orange icon button" variant={buttonVariant.orange} icon={plusIconLeftAligned} onClick={action('onClick')} />
}

export function renderOrangeIconButtonRightAligned() {
  return <Button text="Orange icon button" variant={buttonVariant.orange} icon={plusIconRightAligned} onClick={action('onClick')} />
}
