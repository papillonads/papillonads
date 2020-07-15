import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { marketingTypographyPageDefaultProps, marketingTypographyPagePropTypes } from './MarketingTypographyPage.prop'

export function MarketingTypographyPage() {
  return <UtilityTemplate.MarketingTypography />
}

MarketingTypographyPage.defaultProps = marketingTypographyPageDefaultProps

MarketingTypographyPage.propTypes = marketingTypographyPagePropTypes

// Default export is required to use with React.lazy()
export default MarketingTypographyPage
