import React from 'react'
import { defaultProps, propTypes } from './TestingTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './TestingTemplate.MainContent'

export function TestingTemplate() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="d-flex flex-wrap flex-lg-nowrap">
        <MainContent />
        <SideBar />
      </div>
    </React.Fragment>
  )
}

TestingTemplate.defaultProps = defaultProps

TestingTemplate.propTypes = propTypes
