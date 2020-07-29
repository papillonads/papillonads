import React from 'react'
import { SupportTemplate } from '../../../template/SupportTemplate'
import { defaultProps, propTypes } from './SupportPage.prop'

export function SupportPage() {
  return <SupportTemplate.Support />
}

SupportPage.defaultProps = defaultProps

SupportPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default SupportPage
