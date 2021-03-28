import { Fragment } from 'react'
import { defaultProps, propTypes } from './ComponentsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ComponentsTemplate.MainContent'

export function ComponentsTemplate() {
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

ComponentsTemplate.defaultProps = defaultProps

ComponentsTemplate.propTypes = propTypes
