import React from 'react'
import { action } from '@storybook/addon-actions'

const Radio =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Form.Radio
    : require('../../../../../build').primer.Form.Radio

const name = 'fantastic-name'

export function renderCustom(onChange) {
  return <Radio name={name} onChange={onChange} text="White" />
}

export function renderDefault() {
  return (
    <React.Fragment>
      <Radio name={name} onChange={action('onChange-white')} text="White" />
      <Radio name={name} isChecked={true} onChange={action('onChange-black')} text="Black" />
    </React.Fragment>
  )
}
