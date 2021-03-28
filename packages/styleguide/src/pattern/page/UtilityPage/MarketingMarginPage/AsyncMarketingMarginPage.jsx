import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './MarketingMarginPage.prop'

const LazyMarketingMarginPage = lazy(() => import('./MarketingMarginPage'))

export function AsyncMarketingMarginPage() {
  return (
    <Suspense fallback={null}>
      <LazyMarketingMarginPage />
    </Suspense>
  )
}

AsyncMarketingMarginPage.defaultProps = defaultProps

AsyncMarketingMarginPage.propTypes = propTypes
