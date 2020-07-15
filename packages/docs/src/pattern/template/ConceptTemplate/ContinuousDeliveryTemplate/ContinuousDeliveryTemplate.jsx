import React from 'react'
import { defaultProps, propTypes } from './ContinuousDeliveryTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ContinuousDeliveryTemplate.MainContent'

export function ContinuousDeliveryTemplate() {
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

ContinuousDeliveryTemplate.defaultProps = defaultProps

ContinuousDeliveryTemplate.propTypes = propTypes
