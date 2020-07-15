import React from 'react'
import { SupportTemplate } from '../../../template/SupportTemplate'
import { marketingVariablesPageDefaultProps, marketingVariablesPagePropTypes } from './MarketingVariablesPage.prop'

export function MarketingVariablesPage() {
  return <SupportTemplate.MarketingVariables />
}

MarketingVariablesPage.defaultProps = marketingVariablesPageDefaultProps

MarketingVariablesPage.propTypes = marketingVariablesPagePropTypes

// Default export is required to use with React.lazy()
export default MarketingVariablesPage
