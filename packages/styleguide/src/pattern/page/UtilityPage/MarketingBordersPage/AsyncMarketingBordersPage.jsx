import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './MarketingBordersPage.prop'

const LazyMarketingBordersPage = lazy(() => import('./MarketingBordersPage'))

export function AsyncMarketingBordersPage() {
  return (
    <Suspense fallback={null}>
      <LazyMarketingBordersPage />
    </Suspense>
  )
}

AsyncMarketingBordersPage.defaultProps = defaultProps

AsyncMarketingBordersPage.propTypes = propTypes
