import React from 'react'
import { defaultProps, propTypes } from './OcticonsPage.prop'

const LazyOcticonsPage = React.lazy(() => import('./OcticonsPage'))

export function AsyncOcticonsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyOcticonsPage />
    </React.Suspense>
  )
}

AsyncOcticonsPage.defaultProps = defaultProps

AsyncOcticonsPage.propTypes = propTypes
