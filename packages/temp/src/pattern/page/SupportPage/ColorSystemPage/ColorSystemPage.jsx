import React from 'react'
import { SupportTemplate } from '../../../template/SupportTemplate'
import { colorSystemPageDefaultProps, colorSystemPagePropTypes } from './ColorSystemPage.prop'

export function ColorSystemPage() {
  return <SupportTemplate.ColorSystem />
}

ColorSystemPage.defaultProps = colorSystemPageDefaultProps

ColorSystemPage.propTypes = colorSystemPagePropTypes

// Default export is required to use with React.lazy()
export default ColorSystemPage
