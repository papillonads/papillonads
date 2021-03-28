import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './MarketingPaddingPage.prop'

const LazyMarketingPaddingPage = lazy(() => import('./MarketingPaddingPage'))

export function AsyncMarketingPaddingPage() {
  return (
    <Suspense fallback={null}>
      <LazyMarketingPaddingPage />
    </Suspense>
  )
}

AsyncMarketingPaddingPage.defaultProps = defaultProps

AsyncMarketingPaddingPage.propTypes = propTypes
