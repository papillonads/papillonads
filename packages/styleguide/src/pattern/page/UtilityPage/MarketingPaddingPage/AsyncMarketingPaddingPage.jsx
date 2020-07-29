import React from 'react'
import { defaultProps, propTypes } from './MarketingPaddingPage.prop'

const LazyMarketingPaddingPage = React.lazy(() => import('./MarketingPaddingPage'))

export function AsyncMarketingPaddingPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMarketingPaddingPage />
    </React.Suspense>
  )
}

AsyncMarketingPaddingPage.defaultProps = defaultProps

AsyncMarketingPaddingPage.propTypes = propTypes
