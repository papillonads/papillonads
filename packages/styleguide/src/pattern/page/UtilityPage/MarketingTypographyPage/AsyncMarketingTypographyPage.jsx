import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './MarketingTypographyPage.prop'

const LazyMarketingTypographyPage = lazy(() => import('./MarketingTypographyPage'))

export function AsyncMarketingTypographyPage() {
  return (
    <Suspense fallback={null}>
      <LazyMarketingTypographyPage />
    </Suspense>
  )
}

AsyncMarketingTypographyPage.defaultProps = defaultProps

AsyncMarketingTypographyPage.propTypes = propTypes
