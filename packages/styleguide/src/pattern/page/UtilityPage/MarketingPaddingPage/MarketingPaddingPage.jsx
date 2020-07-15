import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { marketingPaddingPageDefaultProps, marketingPaddingPagePropTypes } from './MarketingPaddingPage.prop'

export function MarketingPaddingPage() {
  return <UtilityTemplate.MarketingPadding />
}

MarketingPaddingPage.defaultProps = marketingPaddingPageDefaultProps

MarketingPaddingPage.propTypes = marketingPaddingPagePropTypes

// Default export is required to use with React.lazy()
export default MarketingPaddingPage
