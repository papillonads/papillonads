import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { defaultProps, propTypes } from './MarketingLayoutPage.prop'

export function MarketingLayoutPage() {
  return <UtilityTemplate.MarketingLayout />
}

MarketingLayoutPage.defaultProps = defaultProps

MarketingLayoutPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default MarketingLayoutPage
