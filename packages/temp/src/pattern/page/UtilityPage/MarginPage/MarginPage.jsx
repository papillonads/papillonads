import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { marginPageDefaultProps, marginPagePropTypes } from './MarginPage.prop'

export function MarginPage() {
  return <UtilityTemplate.Margin />
}

MarginPage.defaultProps = marginPageDefaultProps

MarginPage.propTypes = marginPagePropTypes

// Default export is required to use with React.lazy()
export default MarginPage
