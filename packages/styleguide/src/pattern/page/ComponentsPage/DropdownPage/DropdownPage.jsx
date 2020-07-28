import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './DropdownPage.prop'

export function DropdownPage() {
  return <ComponentsTemplate.Dropdown />
}

DropdownPage.defaultProps = defaultProps

DropdownPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default DropdownPage
