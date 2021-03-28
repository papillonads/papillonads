import { text, select } from '@storybook/addon-knobs'
import { assetType } from '../../Asset/Asset.prop'

const AssetIcon =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.AssetIcon
    : require('../../../../build').content.AssetIcon

export function renderDefault() {
  return <AssetIcon />
}

export function renderWithAdditionalClassName() {
  return <AssetIcon type="presentation" className="fantastic-class-name" />
}

export function renderWithImageType() {
  return <AssetIcon className={text('className', '')} type={select('type', ['', ...Object.keys(assetType)], 'image')} />
}

export function renderWithNoA11yIsues() {
  return <AssetIcon type="presentation" />
}
