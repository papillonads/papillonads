import React from 'react'
import { defaultProps, propTypes } from './SubheadTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './SubheadTemplate.MainContent'

export function SubheadTemplate() {
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

SubheadTemplate.defaultProps = defaultProps

SubheadTemplate.propTypes = propTypes
