/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const RadioButtonField =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.RadioButtonField
    : require('../../../../build').content.RadioButtonField

const FieldGroup =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.FieldGroup
    : require('../../../../build').content.FieldGroup

export function renderDefault() {
  const [activeOption, setActiveOption] = useState('yes')

  return (
    <FieldGroup>
      <RadioButtonField
        labelText={text('labelText', 'Option 1')}
        helpText={text('helpText', 'This is a helptext')}
        validationMessage={text('validationMessage', undefined)}
        disabled={boolean('disabled', false)}
        name="someOption"
        checked={activeOption === 'yes'}
        value="yes"
        onChange={(e) => setActiveOption(e.target.value)}
        labelIsLight={boolean('labelIsLight', false)}
        inputProps={{
          onBlur: action('onBlur'),
          onFocus: action('onFoucs'),
        }}
        id="termsCheckbox"
      />
      <RadioButtonField
        labelText={text('labelText', 'Option 2')}
        helpText={text('helpText', 'This is a helptext')}
        validationMessage={text('validationMessage', undefined)}
        disabled={boolean('disabled', false)}
        name="someOption"
        value="no"
        checked={activeOption === 'no'}
        onChange={(e) => setActiveOption(e.target.value)}
        labelIsLight={boolean('labelIsLight', false)}
        inputProps={{
          onBlur: action('onBlur'),
          onFocus: action('onFoucs'),
        }}
        id="termsCheckboxOption2"
      />
    </FieldGroup>
  )
}
