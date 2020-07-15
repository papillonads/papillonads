import React from 'react'
import { gettingStartedPageDefaultProps, gettingStartedPagePropTypes } from './GettingStartedPage.prop'

const LazyGettingStartedPage = React.lazy(() => import('./GettingStartedPage'))

export function AsyncGettingStartedPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyGettingStartedPage />
    </React.Suspense>
  )
}

AsyncGettingStartedPage.defaultProps = gettingStartedPageDefaultProps

AsyncGettingStartedPage.propTypes = gettingStartedPagePropTypes
