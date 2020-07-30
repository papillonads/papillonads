import React from 'react'
import { defaultProps, propTypes } from './PageheadPage.prop'

const LazyPageheadPage = React.lazy(() => import('./PageheadPage'))

export function AsyncPageheadPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyPageheadPage />
    </React.Suspense>
  )
}

AsyncPageheadPage.defaultProps = defaultProps

AsyncPageheadPage.propTypes = propTypes
