import React from 'react'
import { defaultProps, propTypes } from './ConceptTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ConceptTemplate.MainContent'

export function ConceptTemplate() {
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

ConceptTemplate.defaultProps = defaultProps

ConceptTemplate.propTypes = propTypes
