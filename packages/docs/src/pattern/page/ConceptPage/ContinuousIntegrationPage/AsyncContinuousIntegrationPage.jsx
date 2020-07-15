import React from 'react'
import { defaultProps, propTypes } from './ContinuousIntegrationPage.prop'

const LazyContinuousIntegrationPage = React.lazy(() => import('./ContinuousIntegrationPage'))

export function AsyncContinuousIntegrationPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyContinuousIntegrationPage />
    </React.Suspense>
  )
}

AsyncContinuousIntegrationPage.defaultProps = defaultProps

AsyncContinuousIntegrationPage.propTypes = propTypes
