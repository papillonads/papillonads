import { Fragment } from 'react'
import { defaultProps, propTypes } from './ColorsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ColorsTemplate.MainContent'

export function ColorsTemplate() {
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

ColorsTemplate.defaultProps = defaultProps

ColorsTemplate.propTypes = propTypes
