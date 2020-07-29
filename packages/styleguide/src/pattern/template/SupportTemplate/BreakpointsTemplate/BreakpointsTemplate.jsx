import React from 'react'
import { defaultProps, propTypes } from './BreakpointsTemplate.prop'
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

BreakpointsTemplate.defaultProps = defaultProps

BreakpointsTemplate.propTypes = propTypes
