import React from 'react'
import { marketingFiltersPageDefaultProps, marketingFiltersPagePropTypes } from './MarketingFiltersPage.prop'

const LazyMarketingFiltersPage = React.lazy(() => import('./MarketingFiltersPage'))

export function AsyncMarketingFiltersPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMarketingFiltersPage />
    </React.Suspense>
  )
}

AsyncMarketingFiltersPage.defaultProps = marketingFiltersPageDefaultProps

AsyncMarketingFiltersPage.propTypes = marketingFiltersPagePropTypes
