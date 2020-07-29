import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { defaultProps, propTypes } from './PaddingPage.prop'

export function PaddingPage() {
  return <UtilityTemplate.Padding />
}

PaddingPage.defaultProps = defaultProps

PaddingPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default PaddingPage
