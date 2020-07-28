import React from 'react'
import { defaultProps, propTypes } from './BlankslateTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './BlankslateTemplate.MainContent'

export function BlankslateTemplate() {
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

BlankslateTemplate.defaultProps = defaultProps

BlankslateTemplate.propTypes = propTypes
