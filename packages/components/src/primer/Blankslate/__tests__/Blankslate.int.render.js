import React from 'react'
import { blankslateVariant } from '../Blankslate.prop'

const Blankslate =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Blankslate.Blankslate
    : require('../../../../build').primer.Blankslate.Blankslate

const heading = 'This is a blank slate'
const text = 'Use it to provide information when no dynamic content exists.'

export function renderDefault() {
  return <Blankslate variant={blankslateVariant.default} heading={heading} text={text} />
}

export function renderNarrow() {
  return <Blankslate variant={blankslateVariant.narrow} heading={heading} text={text} />
}

export function renderCapped() {
  return <Blankslate variant={blankslateVariant.capped} heading={heading} text={text} />
}

export function renderSpacious() {
  return <Blankslate variant={blankslateVariant.spacious} heading={heading} text={text} />
}

export function renderLarge() {
  return <Blankslate variant={blankslateVariant.large} heading={heading} text={text} />
}

export function renderCleanBackground() {
  return <Blankslate hasCleanBackground={true} heading={heading} text={text} />
}
