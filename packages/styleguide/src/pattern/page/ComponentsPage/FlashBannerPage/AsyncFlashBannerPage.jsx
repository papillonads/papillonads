import React from 'react'
import { flashBannerPageDefaultProps, flashBannerPagePropTypes } from './FlashBannerPage.prop'

const LazyFlashBannerPage = React.lazy(() => import('./FlashBannerPage'))

export function AsyncFlashBannerPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyFlashBannerPage />
    </React.Suspense>
  )
}

AsyncFlashBannerPage.defaultProps = flashBannerPageDefaultProps

AsyncFlashBannerPage.propTypes = flashBannerPagePropTypes
