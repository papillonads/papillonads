import { Fragment } from 'react'
import { defaultProps, propTypes } from './SpacingTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './SpacingTemplate.MainContent'

export function SpacingTemplate() {
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

SpacingTemplate.defaultProps = defaultProps

SpacingTemplate.propTypes = propTypes
