import React from 'react'
import { defaultProps, propTypes } from './MarketingMarginPage.prop'

const LazyMarketingMarginPage = React.lazy(() => import('./MarketingMarginPage'))

export function AsyncMarketingMarginPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMarketingMarginPage />
    </React.Suspense>
  )
}

AsyncMarketingMarginPage.defaultProps = defaultProps

AsyncMarketingMarginPage.propTypes = propTypes
