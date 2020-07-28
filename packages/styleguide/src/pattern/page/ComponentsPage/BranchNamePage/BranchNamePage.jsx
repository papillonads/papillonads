import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './BranchNamePage.prop'

export function BranchNamePage() {
  return <ComponentsTemplate.BranchName />
}

BranchNamePage.defaultProps = defaultProps

BranchNamePage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default BranchNamePage
