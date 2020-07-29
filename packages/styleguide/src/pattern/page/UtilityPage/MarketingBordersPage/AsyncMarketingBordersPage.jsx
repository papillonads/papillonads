import React from 'react'
import { defaultProps, propTypes } from './MarketingBordersPage.prop'

const LazyMarketingBordersPage = React.lazy(() => import('./MarketingBordersPage'))

export function AsyncMarketingBordersPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMarketingBordersPage />
    </React.Suspense>
  )
}

AsyncMarketingBordersPage.defaultProps = defaultProps

AsyncMarketingBordersPage.propTypes = propTypes
