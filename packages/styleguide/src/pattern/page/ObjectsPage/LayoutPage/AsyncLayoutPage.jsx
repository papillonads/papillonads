import React from 'react'
import { defaultProps, propTypes } from './LayoutPage.prop'

const LazyLayoutPage = React.lazy(() => import('./LayoutPage'))

export function AsyncLayoutPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyLayoutPage />
    </React.Suspense>
  )
}

AsyncLayoutPage.defaultProps = defaultProps

AsyncLayoutPage.propTypes = propTypes
