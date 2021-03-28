import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { defaultProps, propTypes } from './MarketingMarginPage.prop'

export function MarketingMarginPage() {
  return <UtilityTemplate.MarketingMargin />
}

MarketingMarginPage.defaultProps = defaultProps

MarketingMarginPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default MarketingMarginPage
