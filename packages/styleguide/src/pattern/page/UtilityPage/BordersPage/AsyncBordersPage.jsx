import React from 'react'
import { defaultProps, propTypes } from './BordersPage.prop'

const LazyBordersPage = React.lazy(() => import('./BordersPage'))

export function AsyncBordersPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBordersPage />
    </React.Suspense>
  )
}

AsyncBordersPage.defaultProps = defaultProps

AsyncBordersPage.propTypes = propTypes
