import { Fragment } from 'react'
import { defaultProps, propTypes } from './TableObjectTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './TableObjectTemplate.MainContent'

export function TableObjectTemplate() {
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

TableObjectTemplate.defaultProps = defaultProps

TableObjectTemplate.propTypes = propTypes
