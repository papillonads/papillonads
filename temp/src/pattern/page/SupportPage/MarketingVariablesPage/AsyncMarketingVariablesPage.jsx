import React from 'react'
import { marketingVariablesPageDefaultProps, marketingVariablesPagePropTypes } from './MarketingVariablesPage.prop'

const LazyMarketingVariablesPage = React.lazy(() => import('./MarketingVariablesPage'))

export function AsyncMarketingVariablesPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMarketingVariablesPage />
    </React.Suspense>
  )
}

AsyncMarketingVariablesPage.defaultProps = marketingVariablesPageDefaultProps

AsyncMarketingVariablesPage.propTypes = marketingVariablesPagePropTypes
