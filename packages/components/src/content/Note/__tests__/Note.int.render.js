import { text, select } from '@storybook/addon-knobs'

const Note =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.Note
    : require('../../../../build').content.Note

export function renderDefault() {
  return (
    <Note
      noteType={select('noteType', ['positive', 'negative', 'warning', 'primary'], Note.defaultProps.noteType)}
      title={text('title', '')}
    >
      {text('children', 'A piece of information that is relevant to the context the user is currently in.')}
    </Note>
  )
}

export function renderAllNotes() {
  return (
    <div>
      <Note>A piece of information that is relevant to the context the user is currently in.</Note>
      <div style={{ marginTop: 20 }} />
      <Note noteType="negative">A piece of information that is relevant to the context the user is currently in.</Note>
      <div style={{ marginTop: 20 }} />
      <Note noteType="warning">A piece of information that is relevant to the context the user is currently in.</Note>
      <div style={{ marginTop: 20 }} />
      <Note noteType="positive">A piece of information that is relevant to the context the user is currently in.</Note>
      <div style={{ marginTop: 60 }} />
      <Note title="Short, yet succint title">
        A piece of information that is relevant to the context the user is currently in. If you like it then you should put{' '}
        <a href="https://github.com/papillonads/papillonads">a link</a> in it.
      </Note>
      <div style={{ marginTop: 20 }} />
      <Note noteType="negative" title="Short, yet succint title">
        A piece of information that is relevant to the context the user is currently in. If you like it then you should put{' '}
        <a href="https://github.com/papillonads/papillonads">a link</a> in it.
      </Note>
      <div style={{ marginTop: 20 }} />
      <Note noteType="warning" title="Short, yet succint title">
        A piece of information that is relevant to the context the user is currently in. If you like it then you should put{' '}
        <a href="https://github.com/papillonads/papillonads">a link</a> in it.
      </Note>
      <div style={{ marginTop: 20 }} />
      <Note noteType="positive" title="Short, yet succint title">
        A piece of information that is relevant to the context the user is currently in. If you like it then you should put{' '}
        <a href="https://github.com/papillonads/papillonads">a link</a> in it.
      </Note>
    </div>
  )
}
