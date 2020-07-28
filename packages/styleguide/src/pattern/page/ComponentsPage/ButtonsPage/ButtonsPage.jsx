import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { buttonsPageDefaultProps, buttonsPagePropTypes } from './ButtonsPage.prop'

export function ButtonsPage() {
  return <ComponentsTemplate.Buttons />
}

ButtonsPage.defaultProps = buttonsPageDefaultProps

ButtonsPage.propTypes = buttonsPagePropTypes

// Default export is required to use with React.lazy()
export default ButtonsPage
