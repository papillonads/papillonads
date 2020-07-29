import React from 'react'
import { defaultProps, propTypes } from './MarketingLayoutPage.prop'

const LazyMarketingLayoutPage = React.lazy(() => import('./MarketingLayoutPage'))

export function AsyncMarketingLayoutPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMarketingLayoutPage />
    </React.Suspense>
  )
}

AsyncMarketingLayoutPage.defaultProps = defaultProps

AsyncMarketingLayoutPage.propTypes = propTypes
