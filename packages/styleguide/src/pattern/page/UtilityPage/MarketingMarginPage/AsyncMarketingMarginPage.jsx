import React from 'react'
import { marketingMarginPageDefaultProps, marketingMarginPagePropTypes } from './MarketingMarginPage.prop'

const LazyMarketingMarginPage = React.lazy(() => import('./MarketingMarginPage'))

export function AsyncMarketingMarginPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMarketingMarginPage />
    </React.Suspense>
  )
}

AsyncMarketingMarginPage.defaultProps = marketingMarginPageDefaultProps

AsyncMarketingMarginPage.propTypes = marketingMarginPagePropTypes
