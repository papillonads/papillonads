import React from 'react'
import { defaultProps, propTypes } from './FlashBannerPage.prop'

const LazyFlashBannerPage = React.lazy(() => import('./FlashBannerPage'))

export function AsyncFlashBannerPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyFlashBannerPage />
    </React.Suspense>
  )
}

AsyncFlashBannerPage.defaultProps = defaultProps

AsyncFlashBannerPage.propTypes = propTypes
