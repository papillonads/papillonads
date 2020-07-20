import React from 'react'
import { action } from '@storybook/addon-actions'
import buttonStyles from '../../../Button/Button.scss'
import counterStyles from '../../../Label/counters.scss'
import { underlineNavItemType, underlineNavAlignmentType } from '../UnderlineNav.prop'
import { iconName } from '../../../Icon/Icon.prop'

const UnderlineNav =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Navigation.UnderlineNav
    : require('../../../../../build').primer.Navigation.UnderlineNav

export const ariaAttr = {
  label: 'Foo bar',
  selected: 'true',
  current: 'page',
}

export const buttonItems = [
  { text: 'Item 1', isSelected: true },
  { text: 'Item 2', isSelected: false },
  { text: 'Item 3', isSelected: false },
  { text: 'Item 4', isSelected: false },
]

export const anchorItems = [
  { href: '#url', text: 'Item 1', isSelected: true },
  { href: '#url', text: 'Item 2', isSelected: false },
  { href: '#url', text: 'Item 3', isSelected: false },
  { href: '#url', text: 'Item 4', isSelected: false },
]

export const iconItems = [
  { href: '#url', icon: iconName.Tools16, html: <span>Item 1</span>, isSelected: true },
  {
    href: '#url',
    icon: iconName.Tools16,
    html: (
      <React.Fragment>
        <span>Item 2</span>
        <span className={counterStyles.Counter}>10</span>
      </React.Fragment>
    ),
    isSelected: false,
  },
  { href: '#url', icon: iconName.Tools16, html: <span>Item 3</span>, isSelected: false },
  { href: '#url', icon: iconName.Tools16, html: <span>Item 4</span>, isSelected: false },
]

export const fullContainerItems = [
  { href: '#url', icon: iconName.Tools16, html: <span>Item 1</span>, isSelected: true },
  {
    href: '#url',
    icon: iconName.Tools16,
    html: (
      <React.Fragment>
        <span>Item 2</span>
        <span className={counterStyles.Counter}>10</span>
      </React.Fragment>
    ),
    isSelected: false,
  },
  { href: '#url', icon: iconName.Tools16, html: <span>Item 3</span>, isSelected: false },
  { href: '#url', icon: iconName.Tools16, html: <span>Item 4</span>, isSelected: false },
]

const actionButton = (
  <a href="#url" className={buttonStyles.btn}>
    Button
  </a>
)

const actions = [actionButton]

export function renderCustom(items, itemType, onClick) {
  return <UnderlineNav ariaAttr={ariaAttr} items={items} itemType={itemType} onClick={onClick} />
}

export function renderDefault() {
  return <UnderlineNav ariaAttr={ariaAttr} items={buttonItems} itemType={underlineNavItemType.button} onClick={action('onClick')} />
}

export function renderWithActions() {
  return (
    <UnderlineNav ariaAttr={ariaAttr} items={anchorItems} itemType={underlineNavItemType.a} actions={actions} onClick={action('onClick')} />
  )
}

export function renderRightAligned() {
  return (
    <UnderlineNav
      ariaAttr={ariaAttr}
      items={anchorItems}
      itemType={underlineNavItemType.a}
      align={underlineNavAlignmentType.right}
      onClick={action('onClick')}
    />
  )
}

export function renderRightAlignedWithActions() {
  return (
    <UnderlineNav
      ariaAttr={ariaAttr}
      items={anchorItems}
      itemType={underlineNavItemType.a}
      align={underlineNavAlignmentType.right}
      actions={actions}
      onClick={action('onClick')}
    />
  )
}

export function renderWithIcons() {
  return <UnderlineNav ariaAttr={ariaAttr} items={iconItems} itemType={underlineNavItemType.a} onClick={action('onClick')} />
}

export function renderFullContainer() {
  return (
    <UnderlineNav
      ariaAttr={ariaAttr}
      items={fullContainerItems}
      itemType={underlineNavItemType.a}
      actions={actions}
      fullContainer
      onClick={action('onClick')}
    />
  )
}
