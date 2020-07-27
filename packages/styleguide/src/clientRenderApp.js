/* eslint no-unused-vars : 0 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { withRouter } from 'react-router'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { a11y } from '@papillonads/library'
import {
  appRootRoute,
  docsPageRoute,
  gettingStartedPageRoute,
  supportPageRoute,
  utilityPageRoute,
  objectsPageRoute,
  componentsPageRoute,
  notFoundPageRoute,
} from './route'
import { ErrorBoundary } from './pattern/atom/ErrorBoundary'

a11y.checkAccessibilityIssues(React, ReactDOM, 1000)
export function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route exact={appRootRoute.exact} path={appRootRoute.path}>
            <Redirect to={docsPageRoute.path} />
          </Route>
          <Route exact={docsPageRoute.exact} path={docsPageRoute.path} component={docsPageRoute.clientComponent} />
          <Route
            exact={gettingStartedPageRoute.exact}
            path={gettingStartedPageRoute.path}
            component={gettingStartedPageRoute.clientComponent}
          />
          <Route
            exact={supportPageRoute.support.exact}
            path={supportPageRoute.support.path}
            component={supportPageRoute.support.clientComponent}
          />
          <Route
            exact={supportPageRoute.breakpoints.exact}
            path={supportPageRoute.breakpoints.path}
            component={supportPageRoute.breakpoints.clientComponent}
          />
          <Route
            exact={supportPageRoute.colorSystem.exact}
            path={supportPageRoute.colorSystem.path}
            component={supportPageRoute.colorSystem.clientComponent}
          />
          <Route
            exact={supportPageRoute.spacing.exact}
            path={supportPageRoute.spacing.path}
            component={supportPageRoute.spacing.clientComponent}
          />
          <Route
            exact={supportPageRoute.typography.exact}
            path={supportPageRoute.typography.path}
            component={supportPageRoute.typography.clientComponent}
          />
          <Route
            exact={supportPageRoute.marketingVariables.exact}
            path={supportPageRoute.marketingVariables.path}
            component={supportPageRoute.marketingVariables.clientComponent}
          />
          <Route
            exact={utilityPageRoute.utility.exact}
            path={utilityPageRoute.utility.path}
            component={utilityPageRoute.utility.clientComponent}
          />
          <Route
            exact={utilityPageRoute.animations.exact}
            path={utilityPageRoute.animations.path}
            component={utilityPageRoute.animations.clientComponent}
          />
          <Route
            exact={utilityPageRoute.borders.exact}
            path={utilityPageRoute.borders.path}
            component={utilityPageRoute.borders.clientComponent}
          />
          <Route
            exact={utilityPageRoute.marketingBorders.exact}
            path={utilityPageRoute.marketingBorders.path}
            component={utilityPageRoute.marketingBorders.clientComponent}
          />
          <Route
            exact={utilityPageRoute.boxShadow.exact}
            path={utilityPageRoute.boxShadow.path}
            component={utilityPageRoute.boxShadow.clientComponent}
          />
          <Route
            exact={utilityPageRoute.colors.exact}
            path={utilityPageRoute.colors.path}
            component={utilityPageRoute.colors.clientComponent}
          />
          <Route
            exact={utilityPageRoute.details.exact}
            path={utilityPageRoute.details.path}
            component={utilityPageRoute.details.clientComponent}
          />
          <Route
            exact={utilityPageRoute.marketingFilters.exact}
            path={utilityPageRoute.marketingFilters.path}
            component={utilityPageRoute.marketingFilters.clientComponent}
          />
          <Route
            exact={utilityPageRoute.flexbox.exact}
            path={utilityPageRoute.flexbox.path}
            component={utilityPageRoute.flexbox.clientComponent}
          />
          <Route
            exact={utilityPageRoute.layout.exact}
            path={utilityPageRoute.layout.path}
            component={utilityPageRoute.layout.clientComponent}
          />
          <Route
            exact={utilityPageRoute.marketingLayout.exact}
            path={utilityPageRoute.marketingLayout.path}
            component={utilityPageRoute.marketingLayout.clientComponent}
          />
          <Route
            exact={utilityPageRoute.margin.exact}
            path={utilityPageRoute.margin.path}
            component={utilityPageRoute.margin.clientComponent}
          />
          <Route
            exact={utilityPageRoute.marketingMargin.exact}
            path={utilityPageRoute.marketingMargin.path}
            component={utilityPageRoute.marketingMargin.clientComponent}
          />
          <Route
            exact={utilityPageRoute.padding.exact}
            path={utilityPageRoute.padding.path}
            component={utilityPageRoute.padding.clientComponent}
          />
          <Route
            exact={utilityPageRoute.marketingPadding.exact}
            path={utilityPageRoute.marketingPadding.path}
            component={utilityPageRoute.marketingPadding.clientComponent}
          />
          <Route
            exact={utilityPageRoute.typography.exact}
            path={utilityPageRoute.typography.path}
            component={utilityPageRoute.typography.clientComponent}
          />
          <Route
            exact={utilityPageRoute.marketingTypography.exact}
            path={utilityPageRoute.marketingTypography.path}
            component={utilityPageRoute.marketingTypography.clientComponent}
          />
          <Route
            exact={objectsPageRoute.objects.exact}
            path={objectsPageRoute.objects.path}
            component={objectsPageRoute.objects.clientComponent}
          />
          <Route exact={objectsPageRoute.grid.exact} path={objectsPageRoute.grid.path} component={objectsPageRoute.grid.clientComponent} />
          <Route
            exact={objectsPageRoute.layout.exact}
            path={objectsPageRoute.layout.path}
            component={objectsPageRoute.layout.clientComponent}
          />
          <Route
            exact={objectsPageRoute.tableObject.exact}
            path={objectsPageRoute.tableObject.path}
            component={objectsPageRoute.tableObject.clientComponent}
          />
          <Route
            exact={componentsPageRoute.components.exact}
            path={componentsPageRoute.components.path}
            component={componentsPageRoute.components.clientComponent}
          />
          <Route
            exact={componentsPageRoute.alerts.exact}
            path={componentsPageRoute.alerts.path}
            component={componentsPageRoute.alerts.clientComponent}
          />
          <Route
            exact={componentsPageRoute.avatars.exact}
            path={componentsPageRoute.avatars.path}
            component={componentsPageRoute.avatars.clientComponent}
          />
          <Route component={withRouter(notFoundPageRoute.clientComponent)} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

ReactDOM.hydrate(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
