import React from 'react'

const Subhead =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Subhead
    : require('../../../../build').primer.Subhead

export function renderDefault() {
  return <Subhead heading="Plain subhead" />
}

export function renderIsSpacious() {
  return <Subhead heading="Spacious subhead" isSpacious={true} />
}
