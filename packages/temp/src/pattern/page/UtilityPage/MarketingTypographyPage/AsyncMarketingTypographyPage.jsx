import React from 'react'
import { marketingTypographyPageDefaultProps, marketingTypographyPagePropTypes } from './MarketingTypographyPage.prop'

const LazyMarketingTypographyPage = React.lazy(() => import('./MarketingTypographyPage'))

export function AsyncMarketingTypographyPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMarketingTypographyPage />
    </React.Suspense>
  )
}

AsyncMarketingTypographyPage.defaultProps = marketingTypographyPageDefaultProps

AsyncMarketingTypographyPage.propTypes = marketingTypographyPagePropTypes
