import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './AvatarsPage.prop'

const LazyAvatarsPage = lazy(() => import('./AvatarsPage'))

export function AsyncAvatarsPage() {
  return (
    <Suspense fallback={null}>
      <LazyAvatarsPage />
    </Suspense>
  )
}

AsyncAvatarsPage.defaultProps = defaultProps

AsyncAvatarsPage.propTypes = propTypes
