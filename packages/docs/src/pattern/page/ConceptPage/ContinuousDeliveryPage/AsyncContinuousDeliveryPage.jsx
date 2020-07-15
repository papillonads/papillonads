import React from 'react'
import { defaultProps, propTypes } from './ContinuousDeliveryPage.prop'

const LazyContinuousDeliveryPage = React.lazy(() => import('./ContinuousDeliveryPage'))

export function AsyncContinuousDeliveryPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyContinuousDeliveryPage />
    </React.Suspense>
  )
}

AsyncContinuousDeliveryPage.defaultProps = defaultProps

AsyncContinuousDeliveryPage.propTypes = propTypes
