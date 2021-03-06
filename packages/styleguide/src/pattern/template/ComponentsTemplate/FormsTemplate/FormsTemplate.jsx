import { Fragment } from 'react'
import { defaultProps, propTypes } from './FormsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './FormsTemplate.MainContent'

export function FormsTemplate() {
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

FormsTemplate.defaultProps = defaultProps

FormsTemplate.propTypes = propTypes
