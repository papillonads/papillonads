import React from 'react'
import { defaultProps, propTypes } from './MonorepoPage.prop'

const LazyMonorepoPage = React.lazy(() => import('./MonorepoPage'))

export function AsyncMonorepoPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMonorepoPage />
    </React.Suspense>
  )
}

AsyncMonorepoPage.defaultProps = defaultProps

AsyncMonorepoPage.propTypes = propTypes
