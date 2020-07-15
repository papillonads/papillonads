import React from 'react'
import { action } from '@storybook/addon-actions'
import { toastVariant } from '../Toast.prop'

const text = {
  custom: 'Toast message goes here',
  info:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoquepenatibus et ma',
  success: 'Success message goes here',
  warning: 'Warning message goes here',
  error: 'Error message goes here',
  dismissable: 'This toast is dismissable.',
}

const Toast =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Toast.Toast
    : require('../../../../build').primer.Toast.Toast

export function renderCustom(onClick) {
  return <Toast text={text.custom} isDismissable={true} onClick={onClick} />
}

export function renderInfo() {
  return <Toast variant={toastVariant.info} text={text.info} />
}

export function renderSuccess() {
  return <Toast variant={toastVariant.success} text={text.success} />
}

export function renderWarning() {
  return <Toast variant={toastVariant.warning} text={text.warning} />
}

export function renderError() {
  return <Toast variant={toastVariant.error} text={text.error} />
}

export function renderIsDismissable() {
  return <Toast variant={toastVariant.info} text={text.dismissable} isDismissable={true} onClick={action('onClick')} />
}
