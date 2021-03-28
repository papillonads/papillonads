import { text, select } from '@storybook/addon-knobs'
import { assetType, assetState } from '../Asset.prop'

const fantasticImageUrl = 'https://avatars3.githubusercontent.com/u/4289353'

const Asset =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.Asset
    : require('../../../../build').content.Asset

export function renderDefault() {
  return (
    <Asset
      className={text('className', '')}
      src={text('src', fantasticImageUrl)}
      title={text('title', 'fantastic-title')}
      type={select('type', ['', ...Object.keys(assetType)], 'archive')}
    />
  )
}

export function renderWithAdditionalClassName() {
  return <Asset src={fantasticImageUrl} title="fantastic-title" className="fantastic-class-name" />
}

export function renderWithImage() {
  return (
    <Asset
      className={text('className', '')}
      src={text('src', fantasticImageUrl)}
      title={text('title', 'fantastic-title')}
      type={select('type', ['', ...Object.keys(assetType)], 'image')}
    />
  )
}

export function renderWithArchivedImage() {
  return (
    <Asset
      className={text('className', '')}
      src={text('src', fantasticImageUrl)}
      title={text('title', 'fantastic-title')}
      type={select('type', ['', ...Object.keys(assetType)], 'image')}
      status={assetState.archived}
    />
  )
}

export function renderWithPDFType() {
  return <Asset src={fantasticImageUrl} title="fantastic-title" className="fantastic-class-name" type="pdf" />
}

export function renderWithImageType() {
  return <Asset src={fantasticImageUrl} title="fantastic-title" className="fantastic-class-name" type="image" />
}

export function renderWithArchivedStatus() {
  return <Asset src={fantasticImageUrl} title="fantastic-title" className="fantastic-class-name" type="image" status="archived" />
}

export function renderWithNoA11yIsues() {
  return <Asset src={fantasticImageUrl} title="fantastic-title" />
}
