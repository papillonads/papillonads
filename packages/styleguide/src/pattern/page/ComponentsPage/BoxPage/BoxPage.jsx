import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './BoxPage.prop'

export function BoxPage() {
  return <ComponentsTemplate.Box />
}

BoxPage.defaultProps = defaultProps

BoxPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default BoxPage
