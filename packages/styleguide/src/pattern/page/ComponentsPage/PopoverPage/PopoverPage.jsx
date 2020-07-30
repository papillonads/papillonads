import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './PopoverPage.prop'

export function PopoverPage() {
  return <ComponentsTemplate.Popover />
}

PopoverPage.defaultProps = defaultProps

PopoverPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default PopoverPage
