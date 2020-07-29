import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { defaultProps, propTypes } from './MarketingTypographyPage.prop'

export function MarketingTypographyPage() {
  return <UtilityTemplate.MarketingTypography />
}

MarketingTypographyPage.defaultProps = defaultProps

MarketingTypographyPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default MarketingTypographyPage
