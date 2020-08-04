import React from 'react'
import { propTypes, defaultProps } from './LocalDevelopment.prop'

export function SpecificationsStandardsGuidelines({ className }) {
  return (
    <div className={className}>
      <h2>📗 Specifications/Standards/Guidelines</h2>
      <div>📝. Coming soon 🐬</div>
    </div>
  )
}

SpecificationsStandardsGuidelines.propTypes = propTypes
SpecificationsStandardsGuidelines.defaultProps = defaultProps

export function OpenSourceDependencyProjects({ className }) {
  return (
    <div className={className}>
      <h2>📗 Open Source Dependency Projects</h2>
      <br />
      <br />
      <h3>📖. Webpack DevServer</h3>
      <br />
      <div>
        ﹘ <a href="https://github.com/webpack/webpack-dev-server">Webpack DevServer in Webpack</a> Serves a webpack app. Updates the
        browser on changes
      </div>
      <div>
        ﹘ <a href="https://webpack.js.org/configuration/dev-server/"> Webpack DevServer in Webpack Docs</a> webpack-dev-server can be used
        to quickly develop an application. See the development guide to get started
      </div>
    </div>
  )
}

OpenSourceDependencyProjects.propTypes = propTypes
OpenSourceDependencyProjects.defaultProps = defaultProps

export function DesignSystemCore({ className }) {
  return (
    <div className={className}>
      <h2>📗 Papillon Ads Implementation</h2>
      <h3>📖. Design System Core</h3>
      <h4>📃. Setup file(s)</h4>
      <div>﹘ Coming soon.</div>
      <h4>📃. Knowledge base</h4>
      <div>﹘ Coming soon.</div>
    </div>
  )
}

DesignSystemCore.propTypes = propTypes
DesignSystemCore.defaultProps = defaultProps

export function ProductMicrosites({ className }) {
  return (
    <div className={className}>
      <h2>📗 Papillon Ads Implementation</h2>
      <h3>📖. Product Microsites</h3>
      <h4>📃. Setup file(s)</h4>
      <div>﹘ Coming soon.</div>
      <h4>📃. Knowledge base</h4>
      <div>﹘ Coming soon.</div>
    </div>
  )
}

ProductMicrosites.propTypes = propTypes
ProductMicrosites.defaultProps = defaultProps

export const LocalDevelopment = {
  SpecificationsStandardsGuidelines,
  OpenSourceDependencyProjects,
  Implementation: {
    DesignSystemCore,
    ProductMicrosites,
  },
}
