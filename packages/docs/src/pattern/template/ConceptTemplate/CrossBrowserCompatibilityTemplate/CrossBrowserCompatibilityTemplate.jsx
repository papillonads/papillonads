import React from 'react'
import { defaultProps, propTypes } from './CrossBrowserCompatibilityTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './CrossBrowserCompatibilityTemplate.MainContent'

export function CrossBrowserCompatibilityTemplate() {
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

CrossBrowserCompatibilityTemplate.defaultProps = defaultProps

CrossBrowserCompatibilityTemplate.propTypes = propTypes
