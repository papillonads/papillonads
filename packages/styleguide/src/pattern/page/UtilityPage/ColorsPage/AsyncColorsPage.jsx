import React from 'react'
import { defaultProps, propTypes } from './ColorsPage.prop'

const LazyColorsPage = React.lazy(() => import('./ColorsPage'))

export function AsyncColorsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyColorsPage />
    </React.Suspense>
  )
}

AsyncColorsPage.defaultProps = defaultProps

AsyncColorsPage.propTypes = propTypes
