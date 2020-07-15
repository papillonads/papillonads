import React from 'react'
import { marketingPaddingPageDefaultProps, marketingPaddingPagePropTypes } from './MarketingPaddingPage.prop'

const LazyMarketingPaddingPage = React.lazy(() => import('./MarketingPaddingPage'))

export function AsyncMarketingPaddingPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMarketingPaddingPage />
    </React.Suspense>
  )
}

AsyncMarketingPaddingPage.defaultProps = marketingPaddingPageDefaultProps

AsyncMarketingPaddingPage.propTypes = marketingPaddingPagePropTypes
