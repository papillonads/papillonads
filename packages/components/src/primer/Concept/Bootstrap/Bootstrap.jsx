import { propTypes, defaultProps } from './Bootstrap.prop'

export function SpecificationsStandardsGuidelines({ className }) {
  return (
    <div className={className}>
      <h2>📗 Specifications/Standards/Guidelines</h2>
      Coming soon...
    </div>
  )
}

SpecificationsStandardsGuidelines.propTypes = propTypes
SpecificationsStandardsGuidelines.defaultProps = defaultProps

export function OpenSourceDependencyProjects({ className }) {
  return (
    <div className={className}>
      <h2>📗 Open Source Dependency Projects</h2>
      Coming soon...
    </div>
  )
}

OpenSourceDependencyProjects.propTypes = propTypes
OpenSourceDependencyProjects.defaultProps = defaultProps

export function DesignSystemCore({ className }) {
  return (
    <div className={className}>
      <h2>📗 Papillon Ads Implementation</h2>
      Coming soon...
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
      <h4>📃. Install</h4>
      <div>
        ﹘Run <kbd>rm -rf node_modules package-lock.json && npm install</kbd> for <kbd>repository root</kbd> and <kbd>packages/core</kbd>{' '}
        folder to remove node_modules directory, package-lock.json file and install all packages from scratch
      </div>
      <h4>📃. Bootstrap</h4>
      <div>
        ﹘Run <kbd>npm run bootstrap</kbd>to run linting, formatting, testing and building sequentially
      </div>
      <h4>📃. Start</h4>
      <div>
        ﹘Run <kbd>npm start</kbd> in 1nd terminal in packages/core to start up webpack-dev-server
      </div>
      <div>
        ﹘Run <kbd>npm run test -- --watch --onlyChanged --verbose</kbd> in 2rd terminal to let Jest watch changed tests
      </div>
      <h4>📃. Dynamic Code Splitting</h4>
      <div>
        ﹘Babel enables parsing dynamic imports through{' '}
        <a href="https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import">@babel/plugin-syntax-dynamic-import</a> since{' '}
        <a href="https://babeljs.io/blog/2019/07/03/7.5.0">v7.5.0</a>
      </div>
      <div>
        ﹘Webpack recommends this <a href="https://webpack.js.org/guides/code-splitting/#dynamic-imports">technique</a> instead of the
        legacy webpack-specific approach through optimization.splitChunks configuration option.
      </div>
    </div>
  )
}

ProductMicrosites.propTypes = propTypes
ProductMicrosites.defaultProps = defaultProps

export const Bootstrap = {
  SpecificationsStandardsGuidelines,
  OpenSourceDependencyProjects,
  Implementation: {
    DesignSystemCore,
    ProductMicrosites,
  },
}
