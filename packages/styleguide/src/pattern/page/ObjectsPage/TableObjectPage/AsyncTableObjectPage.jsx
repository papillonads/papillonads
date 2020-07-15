import React from 'react'
import { tableObjectPageDefaultProps, tableObjectPagePropTypes } from './TableObjectPage.prop'

const LazyTableObjectPage = React.lazy(() => import('./TableObjectPage'))

export function AsyncTableObjectPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyTableObjectPage />
    </React.Suspense>
  )
}

AsyncTableObjectPage.defaultProps = tableObjectPageDefaultProps

AsyncTableObjectPage.propTypes = tableObjectPagePropTypes
