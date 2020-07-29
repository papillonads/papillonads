import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { defaultProps, propTypes } from './UtilityPage.prop'

export function UtilityPage() {
  return <UtilityTemplate.Utility />
}

UtilityPage.defaultProps = defaultProps

UtilityPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default UtilityPage
