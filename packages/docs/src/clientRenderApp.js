import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { checkAccessibilityIssues } from '@papillonads/library/a11y'
import { primer } from '@papillonads/components'
import { NotAuthorized, isUserAuthenticatedPapillonAdsOrganizationMember } from '@papillonads/library/auth'
import { homePageRoute, conceptPageRoute, componentsPageRoute, notFoundPageRoute } from './route'

const currentHost = window.location.href.split('://')[1].split('-')[0].split(':')[0]
const localHost = 'localhost'
const isRunningOnLocalHost = currentHost === localHost

/* istanbul ignore next */
export function App() {
  const { ErrorBoundary } = primer

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route exact={homePageRoute.exact} path={homePageRoute.path} component={homePageRoute.clientComponent} />
          <Route
            exact={conceptPageRoute.concept.exact}
            path={conceptPageRoute.concept.path}
            component={conceptPageRoute.concept.clientComponent}
          />
          <Route
            exact={conceptPageRoute.accessibility.exact}
            path={conceptPageRoute.accessibility.path}
            component={conceptPageRoute.accessibility.clientComponent}
          />
          <Route
            exact={conceptPageRoute.applicationArchitecture.exact}
            path={conceptPageRoute.applicationArchitecture.path}
            component={conceptPageRoute.applicationArchitecture.clientComponent}
          />
          <Route
            exact={conceptPageRoute.bootstrap.exact}
            path={conceptPageRoute.bootstrap.path}
            component={conceptPageRoute.bootstrap.clientComponent}
          />
          <Route
            exact={conceptPageRoute.codeStyle.exact}
            path={conceptPageRoute.codeStyle.path}
            component={conceptPageRoute.codeStyle.clientComponent}
          />
          <Route
            exact={conceptPageRoute.compiling.exact}
            path={conceptPageRoute.compiling.path}
            component={conceptPageRoute.compiling.clientComponent}
          />
          <Route
            exact={conceptPageRoute.componentDesign.exact}
            path={conceptPageRoute.componentDesign.path}
            component={conceptPageRoute.componentDesign.clientComponent}
          />
          <Route
            exact={conceptPageRoute.componentDrivenDevelopment.exact}
            path={conceptPageRoute.componentDrivenDevelopment.path}
            component={conceptPageRoute.componentDrivenDevelopment.clientComponent}
          />
          <Route
            exact={conceptPageRoute.continuousDelivery.exact}
            path={conceptPageRoute.continuousDelivery.path}
            component={conceptPageRoute.continuousDelivery.clientComponent}
          />
          <Route
            exact={conceptPageRoute.continuousIntegration.exact}
            path={conceptPageRoute.continuousIntegration.path}
            component={conceptPageRoute.continuousIntegration.clientComponent}
          />
          <Route
            exact={conceptPageRoute.crossBrowserCompatibility.exact}
            path={conceptPageRoute.crossBrowserCompatibility.path}
            component={conceptPageRoute.crossBrowserCompatibility.clientComponent}
          />
          <Route
            exact={conceptPageRoute.cssArchitecture.exact}
            path={conceptPageRoute.cssArchitecture.path}
            component={conceptPageRoute.cssArchitecture.clientComponent}
          />
          <Route
            exact={conceptPageRoute.language.exact}
            path={conceptPageRoute.language.path}
            component={conceptPageRoute.language.clientComponent}
          />
          <Route
            exact={conceptPageRoute.localDevelopment.exact}
            path={conceptPageRoute.localDevelopment.path}
            component={conceptPageRoute.localDevelopment.clientComponent}
          />
          <Route
            exact={conceptPageRoute.microsite.exact}
            path={conceptPageRoute.microsite.path}
            component={conceptPageRoute.microsite.clientComponent}
          />
          <Route
            exact={conceptPageRoute.monorepo.exact}
            path={conceptPageRoute.monorepo.path}
            component={conceptPageRoute.monorepo.clientComponent}
          />
          <Route
            exact={conceptPageRoute.rendering.exact}
            path={conceptPageRoute.rendering.path}
            component={conceptPageRoute.rendering.clientComponent}
          />
          <Route
            exact={conceptPageRoute.routing.exact}
            path={conceptPageRoute.routing.path}
            component={conceptPageRoute.routing.clientComponent}
          />
          <Route
            exact={conceptPageRoute.runtime.exact}
            path={conceptPageRoute.runtime.path}
            component={conceptPageRoute.runtime.clientComponent}
          />
          <Route
            exact={conceptPageRoute.testing.exact}
            path={conceptPageRoute.testing.path}
            component={conceptPageRoute.testing.clientComponent}
          />
          <Route
            exact={conceptPageRoute.versionControl.exact}
            path={conceptPageRoute.versionControl.path}
            component={conceptPageRoute.versionControl.clientComponent}
          />
          <Route
            exact={componentsPageRoute.components.exact}
            path={componentsPageRoute.components.path}
            component={componentsPageRoute.components.clientComponent}
          />
          <Route
            exact={componentsPageRoute.breadcrumb.exact}
            path={componentsPageRoute.breadcrumb.path}
            component={componentsPageRoute.breadcrumb.clientComponent}
          />
          <Route component={withRouter(notFoundPageRoute.clientComponent)} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

/* istanbul ignore next */
function renderApp() {
  checkAccessibilityIssues(React, ReactDOM, 1000)

  ReactDOM.hydrate(<App />, document.getElementById('app'))

  if (module.hot) {
    module.hot.accept()
  }
}

/* istanbul ignore next */
function renderNotauthorized() {
  ReactDOM.hydrate(<NotAuthorized />, document.getElementById('app'))
}

/* istanbul ignore next */
if (!isRunningOnLocalHost) {
  isUserAuthenticatedPapillonAdsOrganizationMember().then((isActivePapillonAdsMember) => {
    if (isActivePapillonAdsMember) {
      renderApp()
    } else {
      renderNotauthorized()
    }
  })
} else {
  renderApp()
}
