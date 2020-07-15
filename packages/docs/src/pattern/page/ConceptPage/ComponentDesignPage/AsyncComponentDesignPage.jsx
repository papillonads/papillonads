import React from 'react'
import { defaultProps, propTypes } from './ComponentDesignPage.prop'

const LazyComponentDesignPage = React.lazy(() => import('./ComponentDesignPage'))

export function AsyncComponentDesignPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyComponentDesignPage />
    </React.Suspense>
  )
}

AsyncComponentDesignPage.defaultProps = defaultProps

AsyncComponentDesignPage.propTypes = propTypes
