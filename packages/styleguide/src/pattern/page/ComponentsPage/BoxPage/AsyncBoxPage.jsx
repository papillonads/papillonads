import React from 'react'
import { boxPageDefaultProps, boxPagePropTypes } from './BoxPage.prop'

const LazyBoxPage = React.lazy(() => import('./BoxPage'))

export function AsyncBoxPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBoxPage />
    </React.Suspense>
  )
}

AsyncBoxPage.defaultProps = boxPageDefaultProps

AsyncBoxPage.propTypes = boxPagePropTypes
