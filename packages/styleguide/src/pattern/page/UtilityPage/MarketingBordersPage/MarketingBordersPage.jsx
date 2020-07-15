import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { marketingBordersPageDefaultProps, marketingBordersPagePropTypes } from './MarketingBordersPage.prop'

export function MarketingBordersPage() {
  return <UtilityTemplate.MarketingBorders />
}

MarketingBordersPage.defaultProps = marketingBordersPageDefaultProps

MarketingBordersPage.propTypes = marketingBordersPagePropTypes

// Default export is required to use with React.lazy()
export default MarketingBordersPage
