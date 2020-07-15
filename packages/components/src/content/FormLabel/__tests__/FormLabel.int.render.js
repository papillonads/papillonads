import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'

const FormLabel =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.FormLabel
    : require('../../../../build').content.FormLabel

export function renderDefault() {
  return (
    <FormLabel required={boolean('required', false)} requiredText={text('requiredText', 'required')} htmlFor="fantastic-html-for">
      {text('children', 'Fantastic Label Text')}
    </FormLabel>
  )
}

export function renderWithAdditionalClassName() {
  return (
    <FormLabel htmlFor="fantastic-html-for" className="fantastic-class-name">
      Fantastic Label Text
    </FormLabel>
  )
}

export function renderAsRequired() {
  return (
    <FormLabel htmlFor="fantastic-html-for" required>
      Fantastic Label Text
    </FormLabel>
  )
}

export function renderWithRequiredText() {
  return (
    <FormLabel htmlFor="fantastic-html-for" requiredText="fantastic-required-text" required>
      Fantastic Label Text
    </FormLabel>
  )
}

export function renderWithNoA11yIsues() {
  return <FormLabel htmlFor="fantastic-html-for">Fantastic Label Text</FormLabel>
}
