import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'

const EditorToolbar =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.EditorToolbar
    : require('../../../../build').content.EditorToolbar

const Button =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.Button
    : require('../../../../build').content.Button

const EditorToolbarButton =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.EditorToolbarButton
    : require('../../../../build').content.EditorToolbarButton

export function renderDefault() {
  return (
    <EditorToolbar className={text('className', '')} style={{ justifyContent: 'space-between' }}>
      <div>
        <EditorToolbarButton icon="FormatBold" label="Bold" isActive={boolean('isActive (bold)', false)} withDropdown={false} />
        <EditorToolbarButton icon="FormatItalic" label="Italic" isActive={boolean('isActive (italic)', false)} withDropdown={false} />
        <EditorToolbarButton
          icon="FormatUnderlined"
          label="Underlined"
          isActive={boolean('isActive (underline)', false)}
          withDropdown={false}
        />
      </div>
      <div>
        <Button size="small" buttonType="muted">
          Example button
        </Button>
      </div>
    </EditorToolbar>
  )
}

export function renderWithAdditionalClassName() {
  return <EditorToolbar className="fantastic-class-name">EditorToolbar</EditorToolbar>
}

export function renderWithNoA11yIsues() {
  return <EditorToolbar>EditorToolbar</EditorToolbar>
}
