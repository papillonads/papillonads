import React from 'react'
import { defaultProps, propTypes } from './LocalDevelopmentTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './LocalDevelopmentTemplate.MainContent'

export function LocalDevelopmentTemplate() {
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

LocalDevelopmentTemplate.defaultProps = defaultProps

LocalDevelopmentTemplate.propTypes = propTypes
