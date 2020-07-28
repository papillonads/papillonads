import React from 'react'
import { defaultProps, propTypes } from './BoxPage.prop'

const LazyBoxPage = React.lazy(() => import('./BoxPage'))

export function AsyncBoxPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBoxPage />
    </React.Suspense>
  )
}

AsyncBoxPage.defaultProps = defaultProps

AsyncBoxPage.propTypes = propTypes
