import React from 'react'
import { defaultProps, propTypes } from './AnimationsPage.prop'

const LazyAnimationsPage = React.lazy(() => import('./AnimationsPage'))

export function AsyncAnimationsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyAnimationsPage />
    </React.Suspense>
  )
}

AsyncAnimationsPage.defaultProps = defaultProps

AsyncAnimationsPage.propTypes = propTypes
