import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { iconName } from '../Icon.prop'

const Icon =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Icon.Icon
    : require('../../../../build').primer.Icon.Icon

export function renderDefault() {
  return (
    <Icon
      icon={select('icon', Object.keys(iconName), Object.keys(iconName)[0])}
      size={select(
        'size',
        {
          'Small (default)': 'small',
          Medium: 'medium',
          Large: 'large',
        },
        'small',
      )}
      className={text('className', '')}
    />
  )
}

export function renderAllIcons() {
  return (
    <div
      style={{
        columns: '3',
        width: '800px',
      }}
    >
      {Object.keys(iconName).map((icon) => (
        <div key={icon} style={{ padding: '4px', fontSize: '14px', lineHeight: '21px' }}>
          <Icon icon={icon} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
          <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>{icon}</span>
        </div>
      ))}
    </div>
  )
}
