import { Fragment } from 'react'
import { defaultProps, propTypes } from './FlexboxTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './FlexboxTemplate.MainContent'

export function FlexboxTemplate() {
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

FlexboxTemplate.defaultProps = defaultProps

FlexboxTemplate.propTypes = propTypes
