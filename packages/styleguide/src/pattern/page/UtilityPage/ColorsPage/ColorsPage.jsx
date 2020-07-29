import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { defaultProps, propTypes } from './ColorsPage.prop'

export function ColorsPage() {
  return <UtilityTemplate.Colors />
}

ColorsPage.defaultProps = defaultProps

ColorsPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default ColorsPage
