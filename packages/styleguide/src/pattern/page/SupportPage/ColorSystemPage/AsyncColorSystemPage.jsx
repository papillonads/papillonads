import React from 'react'
import { defaultProps, propTypes } from './ColorSystemPage.prop'

const LazyColorSystemPage = React.lazy(() => import('./ColorSystemPage'))

export function AsyncColorSystemPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyColorSystemPage />
    </React.Suspense>
  )
}

AsyncColorSystemPage.defaultProps = defaultProps

AsyncColorSystemPage.propTypes = propTypes
