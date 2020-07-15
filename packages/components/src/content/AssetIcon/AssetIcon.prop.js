import { assetType, propTypes as assetPropTypes } from '../Asset/Asset.prop'

export const propTypes = {
  type: assetPropTypes.type,
}

export const defaultProps = {
  type: assetType.archive,
}
