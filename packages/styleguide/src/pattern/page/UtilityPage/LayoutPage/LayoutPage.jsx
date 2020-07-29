import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { defaultProps, propTypes } from './LayoutPage.prop'

export function LayoutPage() {
  return <UtilityTemplate.Layout />
}

LayoutPage.defaultProps = defaultProps

LayoutPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default LayoutPage
