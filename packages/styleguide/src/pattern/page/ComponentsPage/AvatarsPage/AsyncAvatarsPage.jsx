import React from 'react'
import { avatarsPageDefaultProps, avatarsPagePropTypes } from './AvatarsPage.prop'

const LazyAvatarsPage = React.lazy(() => import('./AvatarsPage'))

export function AsyncAvatarsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyAvatarsPage />
    </React.Suspense>
  )
}

AsyncAvatarsPage.defaultProps = avatarsPageDefaultProps

AsyncAvatarsPage.propTypes = avatarsPagePropTypes
