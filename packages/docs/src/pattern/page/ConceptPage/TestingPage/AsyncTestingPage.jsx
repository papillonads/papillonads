import React from 'react'
import { defaultProps, propTypes } from './TestingPage.prop'

const LazyTestingPage = React.lazy(() => import('./TestingPage'))

export function AsyncTestingPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyTestingPage />
    </React.Suspense>
  )
}

AsyncTestingPage.defaultProps = defaultProps

AsyncTestingPage.propTypes = propTypes
