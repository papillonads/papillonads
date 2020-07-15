import React from 'react'
import { colorSystemPageDefaultProps, colorSystemPagePropTypes } from './ColorSystemPage.prop'

const LazyColorSystemPage = React.lazy(() => import('./ColorSystemPage'))

export function AsyncColorSystemPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyColorSystemPage />
    </React.Suspense>
  )
}

AsyncColorSystemPage.defaultProps = colorSystemPageDefaultProps

AsyncColorSystemPage.propTypes = colorSystemPagePropTypes
