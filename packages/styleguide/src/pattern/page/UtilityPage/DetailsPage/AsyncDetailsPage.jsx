import React from 'react'
import { detailsPageDefaultProps, detailsPagePropTypes } from './DetailsPage.prop'

const LazyDetailsPage = React.lazy(() => import('./DetailsPage'))

export function AsyncDetailsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyDetailsPage />
    </React.Suspense>
  )
}

AsyncDetailsPage.defaultProps = detailsPageDefaultProps

AsyncDetailsPage.propTypes = detailsPagePropTypes
