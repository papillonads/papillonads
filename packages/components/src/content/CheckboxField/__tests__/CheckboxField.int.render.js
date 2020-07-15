/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const CheckboxField =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.CheckboxField
    : require('../../../../build').content.CheckboxField

const FieldGroup =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.FieldGroup
    : require('../../../../build').content.FieldGroup

export function renderDefault() {
  const [optionOne, setOptionOne] = useState(false)
  const [optionTwo, setOptionTwo] = useState(false)

  return (
    <FieldGroup>
      <CheckboxField
        labelText={text('labelText', 'Option 1')}
        helpText={text('helpText', 'This is a helptext')}
        validationMessage={text('validationMessage', undefined)}
        disabled={boolean('disabled', false)}
        name="someOption"
        checked={optionOne}
        value="yes"
        onChange={(e) => setOptionOne(e.target.checked)}
        labelIsLight={boolean('labelIsLight', false)}
        inputProps={{
          onBlur: action('onBlur'),
          onFocus: action('onFoucs'),
        }}
        id="termsCheckbox"
      />
      <CheckboxField
        labelText={text('labelText', 'Option 2')}
        helpText={text('helpText', 'This is a helptext')}
        validationMessage={text('validationMessage', undefined)}
        disabled={boolean('disabled', false)}
        name="someOption"
        value="no"
        checked={optionTwo}
        onChange={(e) => setOptionTwo(e.target.checked)}
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
/* eslint-enable react-hooks/rules-of-hooks */
