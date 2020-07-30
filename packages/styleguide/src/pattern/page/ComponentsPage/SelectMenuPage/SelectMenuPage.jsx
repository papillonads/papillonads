import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './SelectMenuPage.prop'

export function SelectMenuPage() {
  return <ComponentsTemplate.SelectMenu />
}

SelectMenuPage.defaultProps = defaultProps

SelectMenuPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default SelectMenuPage
