import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { illustrationName } from '../Illustration.prop'

const Illustration =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.Illustration
    : require('../../../../build').content.Illustration

export function renderDefault() {
  return (
    <Illustration
      illustration={select('illustration', Object.keys(illustrationName), Object.keys(illustrationName)[0])}
      className={text('className', '')}
    />
  )
}

export function renderWithAdditionalClassName() {
  return <Illustration illustration={illustrationName[Object.keys(illustrationName)[0]]} className="fantastic-class-name" />
}

export function renderAllIllustrations() {
  return (
    <div
      style={{
        columns: '3',
        width: '800px',
      }}
    >
      {Object.keys(illustrationName).map((illustration) => (
        <div key={illustration} style={{ padding: '4px', fontSize: '14px', lineHeight: '21px' }}>
          <Illustration illustration={illustration} />
          <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>{illustration}</span>
        </div>
      ))}
    </div>
  )
}
