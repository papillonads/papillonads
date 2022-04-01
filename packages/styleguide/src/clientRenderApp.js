/* eslint-disable import/no-import-module-exports */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { checkAccessibilityIssues } from '@papillonads/library/a11y'
import { primer } from '@papillonads/components'
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

export function App() {
  const { ErrorBoundary } = primer

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path={appRootRoute.path} element={<Navigate to={docsPageRoute.path} />} />
          <Route path={docsPageRoute.path} element={docsPageRoute.clientComponent()} />
          <Route path={gettingStartedPageRoute.path} element={gettingStartedPageRoute.clientComponent()} />
          <Route path={supportPageRoute.support.path} element={supportPageRoute.support.clientComponent()} />
          <Route path={supportPageRoute.breakpoints.path} element={supportPageRoute.breakpoints.clientComponent()} />
          <Route path={supportPageRoute.colorSystem.path} element={supportPageRoute.colorSystem.clientComponent()} />
          <Route path={supportPageRoute.spacing.path} element={supportPageRoute.spacing.clientComponent()} />
          <Route path={supportPageRoute.typography.path} element={supportPageRoute.typography.clientComponent()} />
          <Route path={supportPageRoute.marketingVariables.path} element={supportPageRoute.marketingVariables.clientComponent()} />
          <Route path={utilityPageRoute.utility.path} element={utilityPageRoute.utility.clientComponent()} />
          <Route path={utilityPageRoute.animations.path} element={utilityPageRoute.animations.clientComponent()} />
          <Route path={utilityPageRoute.borders.path} element={utilityPageRoute.borders.clientComponent()} />
          <Route path={utilityPageRoute.marketingBorders.path} element={utilityPageRoute.marketingBorders.clientComponent()} />
          <Route path={utilityPageRoute.boxShadow.path} element={utilityPageRoute.boxShadow.clientComponent()} />
          <Route path={utilityPageRoute.colors.path} element={utilityPageRoute.colors.clientComponent()} />
          <Route path={utilityPageRoute.details.path} element={utilityPageRoute.details.clientComponent()} />
          <Route path={utilityPageRoute.marketingFilters.path} element={utilityPageRoute.marketingFilters.clientComponent()} />
          <Route path={utilityPageRoute.flexbox.path} element={utilityPageRoute.flexbox.clientComponent()} />
          <Route path={utilityPageRoute.layout.path} element={utilityPageRoute.layout.clientComponent()} />
          <Route path={utilityPageRoute.marketingLayout.path} element={utilityPageRoute.marketingLayout.clientComponent()} />
          <Route path={utilityPageRoute.margin.path} element={utilityPageRoute.margin.clientComponent()} />
          <Route path={utilityPageRoute.marketingMargin.path} element={utilityPageRoute.marketingMargin.clientComponent()} />
          <Route path={utilityPageRoute.padding.path} element={utilityPageRoute.padding.clientComponent()} />
          <Route path={utilityPageRoute.marketingPadding.path} element={utilityPageRoute.marketingPadding.clientComponent()} />
          <Route path={utilityPageRoute.typography.path} element={utilityPageRoute.typography.clientComponent()} />
          <Route path={utilityPageRoute.marketingTypography.path} element={utilityPageRoute.marketingTypography.clientComponent()} />
          <Route path={objectsPageRoute.objects.path} element={objectsPageRoute.objects.clientComponent()} />
          <Route path={objectsPageRoute.grid.path} element={objectsPageRoute.grid.clientComponent()} />
          <Route path={objectsPageRoute.layout.path} element={objectsPageRoute.layout.clientComponent()} />
          <Route path={objectsPageRoute.tableObject.path} element={objectsPageRoute.tableObject.clientComponent()} />
          <Route path={componentsPageRoute.components.path} element={componentsPageRoute.components.clientComponent()} />
          <Route path={componentsPageRoute.alerts.path} element={componentsPageRoute.alerts.clientComponent()} />
          <Route path={componentsPageRoute.avatars.path} element={componentsPageRoute.avatars.clientComponent()} />
          <Route path={componentsPageRoute.blankslate.path} element={componentsPageRoute.blankslate.clientComponent()} />
          <Route path={componentsPageRoute.box.path} element={componentsPageRoute.box.clientComponent()} />
          <Route path={componentsPageRoute.boxOverlay.path} element={componentsPageRoute.boxOverlay.clientComponent()} />
          <Route path={componentsPageRoute.boxedGroups.path} element={componentsPageRoute.boxedGroups.clientComponent()} />
          <Route path={componentsPageRoute.branchName.path} element={componentsPageRoute.branchName.clientComponent()} />
          <Route path={componentsPageRoute.breadcrumb.path} element={componentsPageRoute.breadcrumb.clientComponent()} />
          <Route path={componentsPageRoute.buttons.path} element={componentsPageRoute.buttons.clientComponent()} />
          <Route path={componentsPageRoute.dropdown.path} element={componentsPageRoute.dropdown.clientComponent()} />
          <Route path={componentsPageRoute.flashBanner.path} element={componentsPageRoute.flashBanner.clientComponent()} />
          <Route path={componentsPageRoute.forms.path} element={componentsPageRoute.forms.clientComponent()} />
          <Route path={componentsPageRoute.labels.path} element={componentsPageRoute.labels.clientComponent()} />
          <Route path={componentsPageRoute.markdown.path} element={componentsPageRoute.markdown.clientComponent()} />
          <Route path={componentsPageRoute.marketingButtons.path} element={componentsPageRoute.marketingButtons.clientComponent()} />
          <Route path={componentsPageRoute.navigation.path} element={componentsPageRoute.navigation.clientComponent()} />
          <Route path={componentsPageRoute.octicons.path} element={componentsPageRoute.octicons.clientComponent()} />
          <Route path={componentsPageRoute.pageHeaders.path} element={componentsPageRoute.pageHeaders.clientComponent()} />
          <Route path={componentsPageRoute.pageSections.path} element={componentsPageRoute.pageSections.clientComponent()} />
          <Route path={componentsPageRoute.pagehead.path} element={componentsPageRoute.pagehead.clientComponent()} />
          <Route path={componentsPageRoute.pagination.path} element={componentsPageRoute.pagination.clientComponent()} />
          <Route path={componentsPageRoute.popover.path} element={componentsPageRoute.popover.clientComponent()} />
          <Route path={componentsPageRoute.progress.path} element={componentsPageRoute.progress.clientComponent()} />
          <Route path={componentsPageRoute.selectMenu.path} element={componentsPageRoute.selectMenu.clientComponent()} />
          <Route path={componentsPageRoute.subhead.path} element={componentsPageRoute.subhead.clientComponent()} />
          <Route path={componentsPageRoute.tables.path} element={componentsPageRoute.tables.clientComponent()} />
          <Route path={componentsPageRoute.tooltips.path} element={componentsPageRoute.tooltips.clientComponent()} />
          <Route path={componentsPageRoute.truncate.path} element={componentsPageRoute.truncate.clientComponent()} />
          <Route path="*" element={notFoundPageRoute.clientComponent()} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

/* istanbul ignore next */
function renderApp() {
  checkAccessibilityIssues(React, ReactDOM, 1000)

  ReactDOM.hydrateRoot(document.getElementById('app'), <App />)

  if (module.hot) {
    module.hot.accept()
  }
}

renderApp()
