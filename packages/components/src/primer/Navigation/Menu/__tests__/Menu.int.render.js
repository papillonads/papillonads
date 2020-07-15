import React from 'react'
import { action } from '@storybook/addon-actions'
import { iconName } from '../../../Icon/Icon.prop'

const Menu =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Navigation.Menu
    : require('../../../../../build').primer.Navigation.Menu

export const heading = 'Menu heading'

export const ariaAttr = {
  label: 'Person settings',
  labelledBy: 'menu-heading',
  current: 'page',
}

export const defaultItems = [
  { href: '#url', text: 'Account', isSelected: true },
  { href: '#url', text: 'Profile', isSelected: false },
  { href: '#url', text: 'Emails', isSelected: false },
  { href: '#url', text: 'Notifications', isSelected: false },
]

export const iconItems = [
  { href: '#url', icon: iconName.Tools, text: 'Account', isSelected: true },
  { href: '#url', icon: iconName.Person, text: 'Profile', isSelected: false },
  { href: '#url', icon: iconName.Mail, text: 'Emails', isSelected: false },
  { href: '#url', icon: iconName.RadioTower, text: 'Notifications', isSelected: false },
]

export function renderCustom(onClick) {
  return <Menu ariaAttr={ariaAttr} items={defaultItems} onClick={onClick} />
}

export function renderDefault() {
  return <Menu ariaAttr={ariaAttr} items={defaultItems} onClick={action('onClick')} />
}

export function renderWithIcons() {
  return <Menu ariaAttr={ariaAttr} items={iconItems} onClick={action('onClick')} />
}

export function renderWithHeading() {
  return <Menu heading={heading} ariaAttr={ariaAttr} items={defaultItems} onClick={action('onClick')} />
}
