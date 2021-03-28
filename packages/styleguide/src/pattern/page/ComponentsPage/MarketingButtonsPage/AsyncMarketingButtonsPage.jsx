import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './MarketingButtonsPage.prop'

const LazyMarketingButtonsPage = lazy(() => import('./MarketingButtonsPage'))

export function AsyncMarketingButtonsPage() {
  return (
    <Suspense fallback={null}>
      <LazyMarketingButtonsPage />
    </Suspense>
  )
}

AsyncMarketingButtonsPage.defaultProps = defaultProps

AsyncMarketingButtonsPage.propTypes = propTypes
