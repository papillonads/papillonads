import React from 'react'
import { marketingBordersPageDefaultProps, marketingBordersPagePropTypes } from './MarketingBordersPage.prop'

const LazyMarketingBordersPage = React.lazy(() => import('./MarketingBordersPage'))

export function AsyncMarketingBordersPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMarketingBordersPage />
    </React.Suspense>
  )
}

AsyncMarketingBordersPage.defaultProps = marketingBordersPageDefaultProps

AsyncMarketingBordersPage.propTypes = marketingBordersPagePropTypes
