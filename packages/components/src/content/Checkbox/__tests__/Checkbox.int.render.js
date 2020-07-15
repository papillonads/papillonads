import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const Checkbox =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.Checkbox
    : require('../../../../build').content.Checkbox

export function renderDefault() {
  return (
    <Checkbox
      className={text('className', '')}
      id="Checkbox"
      checked={boolean('checked', false)}
      labelText={(text('labelText'), 'fantastic-label-text')}
      disabled={boolean('disabled', false)}
      required={boolean('required', false)}
      name={text('name', 'fantastic-name')}
      onChange={action('onChange')}
      willBlurOnEsc={boolean('willBlurOnEsc', true)}
    />
  )
}

export function renderWithAdditionalClassName() {
  return <Checkbox labelText="checkbox" className="fantastic-class-name" />
}

export function renderWithNoA11yIsues() {
  return <Checkbox labelText="checkbox" />
}
