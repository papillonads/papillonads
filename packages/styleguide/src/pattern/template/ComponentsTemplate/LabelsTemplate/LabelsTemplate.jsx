import { Fragment } from 'react'
import { defaultProps, propTypes } from './LabelsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './LabelsTemplate.MainContent'

export function LabelsTemplate() {
  return (
    <Fragment>
      <Navigation />
      <FlashAlert />
      <div className="d-flex flex-wrap flex-lg-nowrap">
        <MainContent />
        <SideBar />
      </div>
    </Fragment>
  )
}

LabelsTemplate.defaultProps = defaultProps

LabelsTemplate.propTypes = propTypes
