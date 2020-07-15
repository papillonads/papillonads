import React from 'react'
import { action } from '@storybook/addon-actions'
import { popoverVariant, popoverSize } from '../Popover.prop'

const Popover =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Popover.Popover
    : require('../../../../build').primer.Popover.Popover

const intro = 'UI'
const heading = 'Popover heading'
const message = 'Message about this particular piece of UI.'
const acknowledge = 'Got it!'

export function renderCustom(introOnClick, acknowledgeOnClick) {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      introOnClick={introOnClick}
      acknowledgeOnClick={acknowledgeOnClick}
    />
  )
}

export function renderDefault() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function renderDefaultLarge() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      size={popoverSize.large}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function renderBottom() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.bottom}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function renderBottomRight() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.bottomRight}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function renderBottomLeft() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.bottomLeft}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function renderLeft() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.left}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function renderLeftBottom() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.leftBottom}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function renderLeftTop() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.leftTop}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function renderRight() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.right}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function renderRightBottom() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.rightBottom}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function renderRightTop() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.rightTop}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function renderTopLeft() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.topLeft}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}

export function renderTopRight() {
  return (
    <Popover
      intro={intro}
      heading={heading}
      message={message}
      acknowledge={acknowledge}
      variant={popoverVariant.topright}
      introOnClick={action('introOnClick')}
      acknowledgeOnClick={action('acknowledgeOnClick')}
    />
  )
}
