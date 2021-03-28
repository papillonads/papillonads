import { Fragment } from 'react'
import { defaultProps, propTypes } from './TypographyTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './TypographyTemplate.MainContent'

export function TypographyTemplate() {
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

TypographyTemplate.defaultProps = defaultProps

TypographyTemplate.propTypes = propTypes
