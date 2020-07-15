import React from 'react'
import { breakpointsTemplateDefaultProps, breakpointsTemplatePropTypes } from './BreakpointsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './BreakpointsTemplate.MainContent'

export function BreakpointsTemplate() {
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

BreakpointsTemplate.defaultProps = breakpointsTemplateDefaultProps

BreakpointsTemplate.propTypes = breakpointsTemplatePropTypes
