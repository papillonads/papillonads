import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { defaultProps, propTypes } from './MarketingFiltersPage.prop'

export function MarketingFiltersPage() {
  return <UtilityTemplate.MarketingFilters />
}

MarketingFiltersPage.defaultProps = defaultProps

MarketingFiltersPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default MarketingFiltersPage
