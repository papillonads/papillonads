import { Fragment } from 'react'
import { defaultProps, propTypes } from './BoxedGroupsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './BoxedGroupsTemplate.MainContent'

export function BoxedGroupsTemplate() {
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

BoxedGroupsTemplate.defaultProps = defaultProps

BoxedGroupsTemplate.propTypes = propTypes
