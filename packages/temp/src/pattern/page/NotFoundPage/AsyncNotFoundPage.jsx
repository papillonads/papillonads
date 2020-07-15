import React from 'react'
import { notFoundPageDefaultProps, notFoundPagePropTypes } from './NotFoundPage.prop'

const LazyNotFoundPage = React.lazy(() => import('./NotFoundPage'))

export function AsyncNotFoundPage({ location }) {
  return (
    <React.Suspense fallback={null}>
      <LazyNotFoundPage location={location} />
    </React.Suspense>
  )
}

AsyncNotFoundPage.defaultProps = notFoundPageDefaultProps

AsyncNotFoundPage.propTypes = notFoundPagePropTypes
