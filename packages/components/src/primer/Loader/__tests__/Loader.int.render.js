import React from 'react'
import { loaderVariant } from '../Loader.prop'

const Loader =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Loader.Loader
    : require('../../../../build').primer.Loader.Loader

const text = 'Loading'

export function renderHeading() {
  return <Loader variant={loaderVariant.heading} text={text} />
}

export function renderText() {
  return <Loader variant={loaderVariant.text} text={text} />
}

export function renderLabel() {
  return <Loader variant={loaderVariant.label} text={text} />
}

export function renderButton() {
  return <Loader variant={loaderVariant.button} text={text} />
}
