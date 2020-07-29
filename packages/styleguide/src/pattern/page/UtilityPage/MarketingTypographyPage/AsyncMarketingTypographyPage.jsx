import React from 'react'
import { defaultProps, propTypes } from './MarketingTypographyPage.prop'

const LazyMarketingTypographyPage = React.lazy(() => import('./MarketingTypographyPage'))

export function AsyncMarketingTypographyPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMarketingTypographyPage />
    </React.Suspense>
  )
}

AsyncMarketingTypographyPage.defaultProps = defaultProps

AsyncMarketingTypographyPage.propTypes = propTypes
