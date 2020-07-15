import React from 'react'
import { defaultProps, propTypes } from './VersionControlPage.prop'

const LazyVersionControlPage = React.lazy(() => import('./VersionControlPage'))

export function AsyncVersionControlPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyVersionControlPage />
    </React.Suspense>
  )
}

AsyncVersionControlPage.defaultProps = defaultProps

AsyncVersionControlPage.propTypes = propTypes
