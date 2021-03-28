import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './MarketingVariablesPage.prop'

const LazyMarketingVariablesPage = lazy(() => import('./MarketingVariablesPage'))

export function AsyncMarketingVariablesPage() {
  return (
    <Suspense fallback={null}>
      <LazyMarketingVariablesPage />
    </Suspense>
  )
}

AsyncMarketingVariablesPage.defaultProps = defaultProps

AsyncMarketingVariablesPage.propTypes = propTypes
