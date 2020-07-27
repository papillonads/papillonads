import React from 'react'
import { branchNamePageDefaultProps, branchNamePagePropTypes } from './BranchNamePage.prop'

const LazyBranchNamePage = React.lazy(() => import('./BranchNamePage'))

export function AsyncBranchNamePage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBranchNamePage />
    </React.Suspense>
  )
}

AsyncBranchNamePage.defaultProps = branchNamePageDefaultProps

AsyncBranchNamePage.propTypes = branchNamePagePropTypes
