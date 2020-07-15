import React from 'react'
import { SupportTemplate } from '../../../template/SupportTemplate'
import { supportPageDefaultProps, supportPagePropTypes } from './SupportPage.prop'

export function SupportPage() {
  return <SupportTemplate.Support />
}

SupportPage.defaultProps = supportPageDefaultProps

SupportPage.propTypes = supportPagePropTypes

// Default export is required to use with React.lazy()
export default SupportPage
