import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { marketingMarginPageDefaultProps, marketingMarginPagePropTypes } from './MarketingMarginPage.prop'

export function MarketingMarginPage() {
  return <UtilityTemplate.MarketingMargin />
}

MarketingMarginPage.defaultProps = marketingMarginPageDefaultProps

MarketingMarginPage.propTypes = marketingMarginPagePropTypes

// Default export is required to use with React.lazy()
export default MarketingMarginPage
