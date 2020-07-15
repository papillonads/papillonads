import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { marketingLayoutPageDefaultProps, marketingLayoutPagePropTypes } from './MarketingLayoutPage.prop'

export function MarketingLayoutPage() {
  return <UtilityTemplate.MarketingLayout />
}

MarketingLayoutPage.defaultProps = marketingLayoutPageDefaultProps

MarketingLayoutPage.propTypes = marketingLayoutPagePropTypes

// Default export is required to use with React.lazy()
export default MarketingLayoutPage
