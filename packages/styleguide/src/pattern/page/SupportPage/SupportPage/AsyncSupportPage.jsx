import React from 'react'
import { defaultProps, propTypes } from './SupportPage.prop'

const LazySupportPage = React.lazy(() => import('./SupportPage'))

export function AsyncSupportPage() {
  return (
    <React.Suspense fallback={null}>
      <LazySupportPage />
    </React.Suspense>
  )
}

AsyncSupportPage.defaultProps = defaultProps

AsyncSupportPage.propTypes = propTypes
