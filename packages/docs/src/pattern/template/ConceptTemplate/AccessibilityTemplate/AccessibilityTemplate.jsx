import React from 'react'
import { defaultProps, propTypes } from './AccessibilityTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './AccessibilityTemplate.MainContent'

export function AccessibilityTemplate() {
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

AccessibilityTemplate.defaultProps = defaultProps

AccessibilityTemplate.propTypes = propTypes
