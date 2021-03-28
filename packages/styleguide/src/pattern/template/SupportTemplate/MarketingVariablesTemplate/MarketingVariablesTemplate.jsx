import { Fragment } from 'react'
import { defaultProps, propTypes } from './MarketingVariablesTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './MarketingVariablesTemplate.MainContent'

export function MarketingVariablesTemplate() {
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

MarketingVariablesTemplate.defaultProps = defaultProps

MarketingVariablesTemplate.propTypes = propTypes
