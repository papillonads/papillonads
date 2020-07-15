import React from 'react'
import { supportPageDefaultProps, supportPagePropTypes } from './SupportPage.prop'

const LazySupportPage = React.lazy(() => import('./SupportPage'))

export function AsyncSupportPage() {
  return (
    <React.Suspense fallback={null}>
      <LazySupportPage />
    </React.Suspense>
  )
}

AsyncSupportPage.defaultProps = supportPageDefaultProps

AsyncSupportPage.propTypes = supportPagePropTypes
