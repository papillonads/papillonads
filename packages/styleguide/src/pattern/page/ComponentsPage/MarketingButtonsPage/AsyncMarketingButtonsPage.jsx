import React from 'react'
import { defaultProps, propTypes } from './MarketingButtonsPage.prop'

const LazyMarketingButtonsPage = React.lazy(() => import('./MarketingButtonsPage'))

export function AsyncMarketingButtonsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMarketingButtonsPage />
    </React.Suspense>
  )
}

AsyncMarketingButtonsPage.defaultProps = defaultProps

AsyncMarketingButtonsPage.propTypes = propTypes
