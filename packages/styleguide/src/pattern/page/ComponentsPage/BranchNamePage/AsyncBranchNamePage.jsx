import React from 'react'
import { defaultProps, propTypes } from './BranchNamePage.prop'

const LazyBranchNamePage = React.lazy(() => import('./BranchNamePage'))

export function AsyncBranchNamePage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBranchNamePage />
    </React.Suspense>
  )
}

AsyncBranchNamePage.defaultProps = defaultProps

AsyncBranchNamePage.propTypes = propTypes
