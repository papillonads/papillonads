import React from 'react'
import { defaultProps, propTypes } from './DetailsPage.prop'

const LazyDetailsPage = React.lazy(() => import('./DetailsPage'))

export function AsyncDetailsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyDetailsPage />
    </React.Suspense>
  )
}

AsyncDetailsPage.defaultProps = defaultProps

AsyncDetailsPage.propTypes = propTypes
