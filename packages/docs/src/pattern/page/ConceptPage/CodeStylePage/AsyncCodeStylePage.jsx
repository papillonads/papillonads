import React from 'react'
import { defaultProps, propTypes } from './CodeStylePage.prop'

const LazyCodeStylePage = React.lazy(() => import('./CodeStylePage'))

export function AsyncCodeStylePage() {
  return (
    <React.Suspense fallback={null}>
      <LazyCodeStylePage />
    </React.Suspense>
  )
}

AsyncCodeStylePage.defaultProps = defaultProps

AsyncCodeStylePage.propTypes = propTypes
