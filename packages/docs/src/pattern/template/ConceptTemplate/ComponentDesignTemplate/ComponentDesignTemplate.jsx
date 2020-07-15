import React from 'react'
import { defaultProps, propTypes } from './ComponentDesignTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ComponentDesignTemplate.MainContent'

export function ComponentDesignTemplate() {
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

ComponentDesignTemplate.defaultProps = defaultProps

ComponentDesignTemplate.propTypes = propTypes
