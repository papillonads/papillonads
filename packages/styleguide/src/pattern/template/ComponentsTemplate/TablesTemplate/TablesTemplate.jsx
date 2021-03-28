import { Fragment } from 'react'
import { defaultProps, propTypes } from './TablesTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './TablesTemplate.MainContent'

export function TablesTemplate() {
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

TablesTemplate.defaultProps = defaultProps

TablesTemplate.propTypes = propTypes
