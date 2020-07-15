import React from 'react'
import { progressVariant } from '../Progress.prop'

const Progress =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Progress.Progress
    : require('../../../../build').primer.Progress.Progress

export function renderNormal() {
  return <Progress variant={progressVariant.normal} percentage={50} />
}

export function renderLarge() {
  return <Progress variant={progressVariant.large} percentage={50} />
}

export function renderSmall() {
  return <Progress variant={progressVariant.small} percentage={50} />
}
