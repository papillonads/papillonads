import React from 'react'
import { action } from '@storybook/addon-actions'

const Checkbox =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Form.Checkbox
    : require('../../../../../build').primer.Form.Checkbox

const ariaAttr = {
  describedBy: 'help-text-for-checkbox',
}

export const text = {
  isChecked: 'is checked',
  isNotChecked: 'is not checked',
}

export function renderCustom(onChange) {
  return <Checkbox ariaAttr={ariaAttr} isChecked={true} onChange={onChange} text="is checked" />
}

export function renderIsChecked() {
  return <Checkbox ariaAttr={ariaAttr} isChecked={true} onChange={action('onChange')} text={text.isChecked} />
}

export function renderIsNotChecked() {
  return <Checkbox ariaAttr={ariaAttr} isChecked={false} onChange={action('onChange')} text={text.isNotChecked} />
}
