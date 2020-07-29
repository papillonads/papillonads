import React from 'react'
import { defaultProps, propTypes } from './OcticonsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './OcticonsTemplate.MainContent'

export function OcticonsTemplate() {
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

OcticonsTemplate.defaultProps = defaultProps

OcticonsTemplate.propTypes = propTypes
