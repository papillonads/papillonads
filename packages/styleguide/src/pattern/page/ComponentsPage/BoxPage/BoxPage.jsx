import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { boxPageDefaultProps, boxPagePropTypes } from './BoxPage.prop'

export function BoxPage() {
  return <ComponentsTemplate.Box />
}

BoxPage.defaultProps = boxPageDefaultProps

BoxPage.propTypes = boxPagePropTypes

// Default export is required to use with React.lazy()
export default BoxPage
