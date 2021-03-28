import { Fragment } from 'react'
import { defaultProps, propTypes } from './PaginationTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './PaginationTemplate.MainContent'

export function PaginationTemplate() {
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

PaginationTemplate.defaultProps = defaultProps

PaginationTemplate.propTypes = propTypes
