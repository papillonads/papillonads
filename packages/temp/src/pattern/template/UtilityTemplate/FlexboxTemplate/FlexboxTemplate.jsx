import React from 'react'
import { flexboxTemplateDefaultProps, flexboxTemplatePropTypes } from './FlexboxTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './FlexboxTemplate.MainContent'

export function FlexboxTemplate() {
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

FlexboxTemplate.defaultProps = flexboxTemplateDefaultProps

FlexboxTemplate.propTypes = flexboxTemplatePropTypes