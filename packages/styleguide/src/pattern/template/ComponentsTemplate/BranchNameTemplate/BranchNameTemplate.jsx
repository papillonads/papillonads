import React from 'react'
import { branchNameTemplateDefaultProps, branchNameTemplatePropTypes } from './BranchNameTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './BranchNameTemplate.MainContent'

export function BranchNameTemplate() {
  return (
    <React.Fragment>
      <Navigation />
      <FlashAlert />
      <div className="d-flex flex-wrap flex-lg-nowrap">
        <MainContent />
        <SideBar />
      </div>
    </React.Fragment>
  )
}

BranchNameTemplate.defaultProps = branchNameTemplateDefaultProps

BranchNameTemplate.propTypes = branchNameTemplatePropTypes