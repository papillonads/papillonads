import React from 'react'
import { text, number, select } from '@storybook/addon-knobs'

const Spinner =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.Spinner
    : require('../../../../build').content.Spinner

export function renderDefault() {
  return (
    <Spinner
      className={text('className', '')}
      size={select(
        'Size',
        {
          Default: 'default',
          Small: 'small',
          Large: 'large',
        },
        'default',
      )}
      customSize={number('Custom Size', undefined)}
    />
  )
}

export function renderWithInlineText() {
  return (
    <div>
      Loading{' '}
      <Spinner
        className={text('className', '')}
        size={select(
          'Size',
          {
            Default: 'default',
            Small: 'small',
            Large: 'large',
          },
          'default',
        )}
        customSize={number('Custom Size', undefined)}
      />
    </div>
  )
}
