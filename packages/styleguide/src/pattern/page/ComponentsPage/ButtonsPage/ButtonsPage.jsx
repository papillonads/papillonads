import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './ButtonsPage.prop'

export function ButtonsPage() {
  return <ComponentsTemplate.Buttons />
}

ButtonsPage.defaultProps = defaultProps

ButtonsPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default ButtonsPage
