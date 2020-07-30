import React from 'react'
import { defaultProps, propTypes } from './TruncateTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './TruncateTemplate.MainContent'

export function TruncateTemplate() {
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

TruncateTemplate.defaultProps = defaultProps

TruncateTemplate.propTypes = propTypes
