import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './MarketingLayoutPage.prop'

const LazyMarketingLayoutPage = lazy(() => import('./MarketingLayoutPage'))

export function AsyncMarketingLayoutPage() {
  return (
    <Suspense fallback={null}>
      <LazyMarketingLayoutPage />
    </Suspense>
  )
}

AsyncMarketingLayoutPage.defaultProps = defaultProps

AsyncMarketingLayoutPage.propTypes = propTypes
