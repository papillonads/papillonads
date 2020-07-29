import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './MarketingButtonsPage.prop'

export function MarketingButtonsPage() {
  return <ComponentsTemplate.MarketingButtons />
}

MarketingButtonsPage.defaultProps = defaultProps

MarketingButtonsPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default MarketingButtonsPage
