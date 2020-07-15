import React from 'react'
import { action } from '@storybook/addon-actions'

const Breadcrumb =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Breadcrumb
    : require('../../../../build').primer.Breadcrumb

export const ariaAttr = {
  label: 'Breadcrumb',
  current: 'page',
}

export const items = [
  { href: '/fantastic-folder', text: 'Fantastic Folder', isSelected: false },
  { href: '/fantastic-folder/another-fantastic-folder', text: 'Another Fantastic folder', isSelected: false },
  { href: '', text: 'One More Fantastic Folder', isSelected: true },
]

export function renderCustom(onClick) {
  return <Breadcrumb ariaAttr={ariaAttr} items={items} onClick={onClick} />
}

export function renderDefault() {
  return <Breadcrumb ariaAttr={ariaAttr} items={items} onClick={action('onClick')} />
}
