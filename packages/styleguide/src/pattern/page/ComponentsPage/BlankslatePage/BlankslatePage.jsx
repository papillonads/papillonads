import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { blankslatePageDefaultProps, blankslatePagePropTypes } from './BlankslatePage.prop'

export function BlankslatePage() {
  return <ComponentsTemplate.Blankslate />
}

BlankslatePage.defaultProps = blankslatePageDefaultProps

BlankslatePage.propTypes = blankslatePagePropTypes

// Default export is required to use with React.lazy()
export default BlankslatePage
