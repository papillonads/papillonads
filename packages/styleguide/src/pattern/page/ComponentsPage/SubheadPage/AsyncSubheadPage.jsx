import React from 'react'
import { defaultProps, propTypes } from './SubheadPage.prop'

const LazySubheadPage = React.lazy(() => import('./SubheadPage'))

export function AsyncSubheadPage() {
  return (
    <React.Suspense fallback={null}>
      <LazySubheadPage />
    </React.Suspense>
  )
}

AsyncSubheadPage.defaultProps = defaultProps

AsyncSubheadPage.propTypes = propTypes
