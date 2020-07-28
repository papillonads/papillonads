import React from 'react'
import { defaultProps, propTypes } from './ButtonsPage.prop'

const LazyButtonsPage = React.lazy(() => import('./ButtonsPage'))

export function AsyncButtonsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyButtonsPage />
    </React.Suspense>
  )
}

AsyncButtonsPage.defaultProps = defaultProps

AsyncButtonsPage.propTypes = propTypes
