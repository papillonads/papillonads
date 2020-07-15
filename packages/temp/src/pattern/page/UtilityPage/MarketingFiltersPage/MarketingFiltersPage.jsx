import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { marketingFiltersPageDefaultProps, marketingFiltersPagePropTypes } from './MarketingFiltersPage.prop'

export function MarketingFiltersPage() {
  return <UtilityTemplate.MarketingFilters />
}

MarketingFiltersPage.defaultProps = marketingFiltersPageDefaultProps

MarketingFiltersPage.propTypes = marketingFiltersPagePropTypes

// Default export is required to use with React.lazy()
export default MarketingFiltersPage
