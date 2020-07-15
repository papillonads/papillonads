import React from 'react'
import { defaultProps, propTypes } from './ApplicationArchitectureTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ApplicationArchitectureTemplate.MainContent'

export function ApplicationArchitectureTemplate() {
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

ApplicationArchitectureTemplate.defaultProps = defaultProps

ApplicationArchitectureTemplate.propTypes = propTypes
