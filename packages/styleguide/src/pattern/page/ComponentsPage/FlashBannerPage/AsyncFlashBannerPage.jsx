import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './FlashBannerPage.prop'

const LazyFlashBannerPage = lazy(() => import('./FlashBannerPage'))

export function AsyncFlashBannerPage() {
  return (
    <Suspense fallback={null}>
      <LazyFlashBannerPage />
    </Suspense>
  )
}

AsyncFlashBannerPage.defaultProps = defaultProps

AsyncFlashBannerPage.propTypes = propTypes
