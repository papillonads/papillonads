import React from 'react'
import { text } from '@storybook/addon-knobs'

const ValidationMessage =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.ValidationMessage
    : require('../../../../build').content.ValidationMessage

export function renderDefault() {
  return <ValidationMessage className={text('className', '')}>{text('children', 'fantastic child text')}</ValidationMessage>
}

export function renderWithAdditionalClassName() {
  return <ValidationMessage className="fantastic-class-name">fantastic child text</ValidationMessage>
}

export function renderWithNoA11yIsues() {
  return <ValidationMessage>fantastic child text</ValidationMessage>
}
