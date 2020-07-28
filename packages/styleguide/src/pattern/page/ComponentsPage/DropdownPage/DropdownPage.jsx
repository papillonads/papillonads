import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { dropdownPageDefaultProps, dropdownPagePropTypes } from './DropdownPage.prop'

export function DropdownPage() {
  return <ComponentsTemplate.Dropdown />
}

DropdownPage.defaultProps = dropdownPageDefaultProps

DropdownPage.propTypes = dropdownPagePropTypes

// Default export is required to use with React.lazy()
export default DropdownPage
