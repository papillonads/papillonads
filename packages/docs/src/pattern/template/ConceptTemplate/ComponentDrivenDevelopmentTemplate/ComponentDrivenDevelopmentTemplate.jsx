import React from 'react'
import { defaultProps, propTypes } from './ComponentDrivenDevelopmentTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ComponentDrivenDevelopmentTemplate.MainContent'

export function ComponentDrivenDevelopmentTemplate() {
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

ComponentDrivenDevelopmentTemplate.defaultProps = defaultProps

ComponentDrivenDevelopmentTemplate.propTypes = propTypes
