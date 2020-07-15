import React from 'react'
import { defaultProps, propTypes } from './CodeStyleTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './CodeStyleTemplate.MainContent'

export function CodeStyleTemplate() {
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

CodeStyleTemplate.defaultProps = defaultProps

CodeStyleTemplate.propTypes = propTypes
