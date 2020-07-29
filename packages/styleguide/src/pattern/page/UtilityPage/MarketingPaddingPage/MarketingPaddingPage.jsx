import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { defaultProps, propTypes } from './MarketingPaddingPage.prop'

export function MarketingPaddingPage() {
  return <UtilityTemplate.MarketingPadding />
}

MarketingPaddingPage.defaultProps = defaultProps

MarketingPaddingPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default MarketingPaddingPage
