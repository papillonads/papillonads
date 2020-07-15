import React from 'react'
import { action } from '@storybook/addon-actions'

const PreviousNext =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Pagination.PreviousNext
    : require('../../../../../build').primer.Pagination.PreviousNext

export const ariaAttr = {
  label: 'Pagination',
}

export const currentPage = {
  indexItems: [
    { isCurrent: false, index: 0 },
    { isCurrent: false, index: 1 },
    { isCurrent: true, index: 2 },
    { isCurrent: false, index: 3 },
    { isCurrent: false, index: 4 },
    { isCurrent: false, index: 5 },
    { isCurrent: false, index: 6 },
  ],
  currentIndex: 2,
  canMoveBackwards: true,
  canMoveForward: true,
}

export function renderCustom(onClick) {
  return <PreviousNext ariaAttr={ariaAttr} currentPage={currentPage} onClick={onClick} />
}

export function renderDefault() {
  return <PreviousNext ariaAttr={ariaAttr} currentPage={currentPage} onClick={action('onClick')} />
}
