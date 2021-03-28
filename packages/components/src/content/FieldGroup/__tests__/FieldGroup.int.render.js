/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { boolean } from '@storybook/addon-knobs'

const FieldGroup =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.FieldGroup
    : require('../../../../build').content.FieldGroup

const CheckboxField =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.CheckboxField
    : require('../../../../build').content.CheckboxField

export function renderDefault() {
  const [agreeTerms, setTerms] = useState('yes')

  return (
    <FieldGroup row={boolean('row', false)}>
      <CheckboxField
        labelText="I agree"
        value="yes"
        helpText="Click if you agree"
        onChange={(e) => setTerms(e.target.value)}
        checked={agreeTerms === 'yes'}
        id="termsCheckboxYes"
      />
      <CheckboxField
        labelText="I don't agree"
        value="no"
        onChange={(e) => setTerms(e.target.value)}
        checked={agreeTerms === 'no'}
        helpText="Click if you don't agree"
        id="termsCheckboxNo"
      />
    </FieldGroup>
  )
}
