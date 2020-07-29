import React from 'react'
import { defaultProps, propTypes } from './UtilityTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './UtilityTemplate.MainContent'

export function UtilityTemplate() {
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

UtilityTemplate.defaultProps = defaultProps

UtilityTemplate.propTypes = propTypes
