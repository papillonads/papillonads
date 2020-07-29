import React from 'react'
import { defaultProps, propTypes } from './MarketingFiltersPage.prop'

const LazyMarketingFiltersPage = React.lazy(() => import('./MarketingFiltersPage'))

export function AsyncMarketingFiltersPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMarketingFiltersPage />
    </React.Suspense>
  )
}

AsyncMarketingFiltersPage.defaultProps = defaultProps

AsyncMarketingFiltersPage.propTypes = propTypes
