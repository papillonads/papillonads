import React from 'react'
import { propTypes, defaultProps } from './AssetIcon.prop'
import { Illustration } from '../Illustration'
import { illustrationName } from '../Illustration/Illustration.prop'

export function AssetIcon({ type, ...otherProps }) {
  let illustration = type.charAt(0).toUpperCase() + type.slice(1)

  if (!illustrationName[illustration]) {
    illustration = illustrationName.Archive
  }

  return <Illustration illustration={illustration} {...otherProps} />
}

AssetIcon.propTypes = propTypes

AssetIcon.defaultProps = defaultProps
