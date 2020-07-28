import React from 'react'
import { defaultProps, propTypes } from './AvatarsPage.prop'

const LazyAvatarsPage = React.lazy(() => import('./AvatarsPage'))

export function AsyncAvatarsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyAvatarsPage />
    </React.Suspense>
  )
}

AsyncAvatarsPage.defaultProps = defaultProps

AsyncAvatarsPage.propTypes = propTypes
