import React from 'react'
import { defaultProps, propTypes } from './PaddingPage.prop'

const LazyPaddingPage = React.lazy(() => import('./PaddingPage'))

export function AsyncPaddingPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyPaddingPage />
    </React.Suspense>
  )
}

AsyncPaddingPage.defaultProps = defaultProps

AsyncPaddingPage.propTypes = propTypes
