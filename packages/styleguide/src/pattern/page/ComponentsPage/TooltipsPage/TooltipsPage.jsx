import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './TooltipsPage.prop'

export function TooltipsPage() {
  return <ComponentsTemplate.Tooltips />
}

TooltipsPage.defaultProps = defaultProps

TooltipsPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default TooltipsPage
