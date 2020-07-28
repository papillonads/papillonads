import React from 'react'
import { buttonsPageDefaultProps, buttonsPagePropTypes } from './ButtonsPage.prop'

const LazyButtonsPage = React.lazy(() => import('./ButtonsPage'))

export function AsyncButtonsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyButtonsPage />
    </React.Suspense>
  )
}

AsyncButtonsPage.defaultProps = buttonsPageDefaultProps

AsyncButtonsPage.propTypes = buttonsPagePropTypes
