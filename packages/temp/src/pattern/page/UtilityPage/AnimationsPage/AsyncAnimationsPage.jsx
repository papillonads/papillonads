import React from 'react'
import { animationsPageDefaultProps, animationsPagePropTypes } from './AnimationsPage.prop'

const LazyAnimationsPage = React.lazy(() => import('./AnimationsPage'))

export function AsyncAnimationsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyAnimationsPage />
    </React.Suspense>
  )
}

AsyncAnimationsPage.defaultProps = animationsPageDefaultProps

AsyncAnimationsPage.propTypes = animationsPagePropTypes
