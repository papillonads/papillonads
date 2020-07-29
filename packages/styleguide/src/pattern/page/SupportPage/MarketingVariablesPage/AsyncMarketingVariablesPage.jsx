import React from 'react'
import { defaultProps, propTypes } from './MarketingVariablesPage.prop'

const LazyMarketingVariablesPage = React.lazy(() => import('./MarketingVariablesPage'))

export function AsyncMarketingVariablesPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMarketingVariablesPage />
    </React.Suspense>
  )
}

AsyncMarketingVariablesPage.defaultProps = defaultProps

AsyncMarketingVariablesPage.propTypes = propTypes
