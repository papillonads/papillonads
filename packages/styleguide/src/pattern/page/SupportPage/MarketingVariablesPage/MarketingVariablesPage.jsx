import React from 'react'
import { SupportTemplate } from '../../../template/SupportTemplate'
import { defaultProps, propTypes } from './MarketingVariablesPage.prop'

export function MarketingVariablesPage() {
  return <SupportTemplate.MarketingVariables />
}

MarketingVariablesPage.defaultProps = defaultProps

MarketingVariablesPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default MarketingVariablesPage
