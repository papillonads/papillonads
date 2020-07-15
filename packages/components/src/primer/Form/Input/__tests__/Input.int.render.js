import React from 'react'
import { action } from '@storybook/addon-actions'

const Input =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Form.Input.Input
    : require('../../../../../build').primer.Form.Input.Input

const placeholder = 'Fantastic placeholder'

const ariaAttr = {
  label: 'Repository description',
}

export function renderCustom(onChange, onKeyUp, onFocus, onBlur) {
  return <Input placeholder={placeholder} ariaAttr={ariaAttr} onChange={onChange} onKeyUp={onKeyUp} onFocus={onFocus} onBlur={onBlur} />
}

export function renderDefault() {
  return (
    <Input
      placeholder={placeholder}
      ariaAttr={ariaAttr}
      onChange={action('onChange')}
      onKeyUp={action('onKeyUp')}
      onFocus={action('onFocus')}
      onBlur={action('onBlur')}
    />
  )
}
