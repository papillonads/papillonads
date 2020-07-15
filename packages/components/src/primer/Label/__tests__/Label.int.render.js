import React from 'react'

const Label =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Label
    : require('../../../../build').primer.Label

export function renderDefault() {
  return <Label text="default label" />
}
