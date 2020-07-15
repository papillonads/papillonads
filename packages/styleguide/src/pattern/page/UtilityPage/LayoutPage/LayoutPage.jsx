import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { layoutPageDefaultProps, layoutPagePropTypes } from './LayoutPage.prop'

export function LayoutPage() {
  return <UtilityTemplate.Layout />
}

LayoutPage.defaultProps = layoutPageDefaultProps

LayoutPage.propTypes = layoutPagePropTypes

// Default export is required to use with React.lazy()
export default LayoutPage
