import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './PageheadPage.prop'

export function PageheadPage() {
  return <ComponentsTemplate.Pagehead />
}

PageheadPage.defaultProps = defaultProps

PageheadPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default PageheadPage
