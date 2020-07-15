import React from 'react'
import { defaultProps, propTypes } from './CompilingPage.prop'

const LazyCompilingPage = React.lazy(() => import('./CompilingPage'))

export function AsyncCompilingPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyCompilingPage />
    </React.Suspense>
  )
}

AsyncCompilingPage.defaultProps = defaultProps

AsyncCompilingPage.propTypes = propTypes
