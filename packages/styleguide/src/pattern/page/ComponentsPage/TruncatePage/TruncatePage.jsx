import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './TruncatePage.prop'

export function TruncatePage() {
  return <ComponentsTemplate.Truncate />
}

TruncatePage.defaultProps = defaultProps

TruncatePage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default TruncatePage
