import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { colorsPageDefaultProps, colorsPagePropTypes } from './ColorsPage.prop'

export function ColorsPage() {
  return <UtilityTemplate.Colors />
}

ColorsPage.defaultProps = colorsPageDefaultProps

ColorsPage.propTypes = colorsPagePropTypes

// Default export is required to use with React.lazy()
export default ColorsPage
