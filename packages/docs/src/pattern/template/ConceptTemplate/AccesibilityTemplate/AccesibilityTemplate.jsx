import React from 'react'
import { defaultProps, propTypes } from './AccesibilityTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './AccesibilityTemplate.MainContent'

export function AccesibilityTemplate() {
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

AccesibilityTemplate.defaultProps = defaultProps

AccesibilityTemplate.propTypes = propTypes
