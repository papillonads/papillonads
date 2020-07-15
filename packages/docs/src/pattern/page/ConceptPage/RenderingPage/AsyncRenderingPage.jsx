import React from 'react'
import { defaultProps, propTypes } from './RenderingPage.prop'

const LazyRenderingPage = React.lazy(() => import('./RenderingPage'))

export function AsyncRenderingPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyRenderingPage />
    </React.Suspense>
  )
}

AsyncRenderingPage.defaultProps = defaultProps

AsyncRenderingPage.propTypes = propTypes
