import React from 'react'
import { marketingLayoutPageDefaultProps, marketingLayoutPagePropTypes } from './MarketingLayoutPage.prop'

const LazyMarketingLayoutPage = React.lazy(() => import('./MarketingLayoutPage'))

export function AsyncMarketingLayoutPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMarketingLayoutPage />
    </React.Suspense>
  )
}

AsyncMarketingLayoutPage.defaultProps = marketingLayoutPageDefaultProps

AsyncMarketingLayoutPage.propTypes = marketingLayoutPagePropTypes
