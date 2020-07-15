import React from 'react'
import { action } from '@storybook/addon-actions'

const Dropdown =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Dropdown
    : require('../../../../build').primer.Dropdown

export const summary = 'Dropdown'

export const ariaAttr = {
  haspopup: true,
  current: 'page',
}

export const items = [
  { href: '#url', text: 'Dropdown Item 1', isSelected: true },
  { href: '#url', text: 'Dropdown Item 2', isSelected: false },
  { href: '#url', text: 'Dropdown Item 3', isSelected: false },
  { href: '#url', text: 'Dropdown Item 4', isSelected: false },
]

export function renderCustom(onClick) {
  return <Dropdown summary={summary} ariaAttr={ariaAttr} items={items} onClick={onClick} />
}

export function renderDefault() {
  return <Dropdown summary={summary} ariaAttr={ariaAttr} items={items} onClick={action('onClick')} />
}
