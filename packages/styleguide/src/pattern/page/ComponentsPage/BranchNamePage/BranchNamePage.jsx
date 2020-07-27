import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { branchNamePageDefaultProps, branchNamePagePropTypes } from './BranchNamePage.prop'

export function BranchNamePage() {
  return <ComponentsTemplate.BranchName />
}

BranchNamePage.defaultProps = branchNamePageDefaultProps

BranchNamePage.propTypes = branchNamePagePropTypes

// Default export is required to use with React.lazy()
export default BranchNamePage
