import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './MarketingFiltersPage.prop'

const LazyMarketingFiltersPage = lazy(() => import('./MarketingFiltersPage'))

export function AsyncMarketingFiltersPage() {
  return (
    <Suspense fallback={null}>
      <LazyMarketingFiltersPage />
    </Suspense>
  )
}

AsyncMarketingFiltersPage.defaultProps = defaultProps

AsyncMarketingFiltersPage.propTypes = propTypes
