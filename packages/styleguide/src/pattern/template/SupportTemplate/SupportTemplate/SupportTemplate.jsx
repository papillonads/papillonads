import { Fragment } from 'react'
import { defaultProps, propTypes } from './SupportTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './SupportTemplate.MainContent'

export function SupportTemplate() {
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

SupportTemplate.defaultProps = defaultProps

SupportTemplate.propTypes = propTypes
