import React from 'react'
import { action } from '@storybook/addon-actions'
import { iconName } from '../../Icon/Icon.prop'

const SelectMenu =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.SelectMenu
    : require('../../../../build').primer.SelectMenu

export const summary = 'Choose an item'

export const title = 'Title'

export const ariaAttr = {
  haspopup: true,
  current: 'page',
}

export const items = [
  { text: 'Item 1', isSelected: true },
  { text: 'Item 2', isSelected: false },
  { text: 'Item 3', isSelected: false },
  { text: 'Item 4', isSelected: false },
]

export function renderCustom(onClick) {
  return <SelectMenu summary={summary} icon={iconName.ChevronDown} title={title} ariaAttr={ariaAttr} items={items} onClick={onClick} />
}

export function renderDefault() {
  return (
    <SelectMenu summary={summary} icon={iconName.ChevronDown} title={title} ariaAttr={ariaAttr} items={items} onClick={action('onClick')} />
  )
}
