import React from 'react'
import { propTypes, defaultProps } from './Compiling.prop'

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
      <h3>📖. Transpiling</h3>
      <h4>📃. Babel</h4>
      <h5>
        <a href="https://github.com/babel/babel">📄. Babel is a compiler for writing next generation JavaScript</a>
      </h5>
      <div>
        ﹘ Babel is a tool that helps you write code in the latest version of JavaScript. When your supported environments don&apos;t
        support certain features natively, Babel will help you compile those features down to a supported version.
      </div>
      <div>
        ﹘<a href="https://babeljs.io/docs/en/">Docs</a> Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a
        backwards compatible version of JavaScript in current and older browsers or environments.
      </div>
      <div>
        ﹘<a href="https://babeljs.io/setup">Setup</a> How to use Babel with your tool of choice.
      </div>
      <div>
        ﹘<a href="https://babeljs.io/repl">Try it out</a>
      </div>
      <div>
        ﹘<a href="https://babeljs.io/videos">Videos</a> Videos and podcasts about Babel and its underlying concepts.
      </div>
      <div>
        ﹘<a href="https://babeljs.io/blog/">Blog</a>
      </div>
      <h3>📖. Bundling</h3>
      <h4>📃. Webpack</h4>
      <h5>
        <a href="https://github.com/webpack/webpack">
          📄. A bundler for javascript and friends. Packs many modules into a few bundled assets
        </a>
      </h5>
      <div>
        ﹘Code Splitting allows for loading parts of the application on demand. Through &quot;loaders&quot;, modules can be CommonJs, AMD,
        ES6 modules, CSS, Images, JSON, Coffeescript, LESS, ... and your custom stuff.{' '}
        <a href="https://github.com/webpack/webpack">https://webpack.js.org</a>
      </div>
      <div>
        ﹘Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of
        transforming, bundling, or packaging just about any resource or asset.
      </div>
      <div>
        ﹘<a href="https://webpack.js.org/guides/getting-started/">Getting Started</a> Webpack is used to compile JavaScript modules. Once
        installed, you can interface with webpack either from its CLI or API. If you&apos;re still new to webpack, please read through the
        core concepts and this comparison to learn why you might use it over the other tools that are out in the community.
      </div>
      <div>
        ﹘<a href="https://webpack.js.org/plugins/">Plugins</a> Webpack has a rich plugin interface. Most of the features within webpack
        itself use this plugin interface. This makes webpack flexible.
      </div>
      <div>
        ﹘<a href="https://webpack.js.org/loaders/">Loaders</a> Webpack enables use of loaders to preprocess files. This allows you to
        bundle any static resource way beyond JavaScript. You can easily write your own loaders using Node.js.
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
      <h4>📃. Transpiling</h4>
      <h5>📄. Babel</h5>
      <h6>📝. Setup file(s)</h6>
      <div>
        ﹘<a href="https://github.com/papillonads/marketplace/blob/master/babel.config.js">babel.config.js</a> for{' '}
        <a href="https://jestjs.io/docs/en/getting-started#using-babel">Jest</a>
      </div>
      <div>
        ﹘<a href="https://github.com/papillonads/marketplace/blob/master/packages/core/webpack.common.js">webpack.common.js</a> for regular build
      </div>
      <div>
        ﹘<a href="https://github.com/papillonads/marketplace/blob/master/.storybook/.babelrc">.babelrc</a> for storybook build
      </div>
      <h6>📝. Script(s)</h6>
      <div>﹘&quot;build&quot;: &quot;lerna run build --stream&quot;</div>
      <div>﹘&quot;build-storybook&quot;: &quot;NODE_ENV=develop build-storybook -c .storybook -o .storybook-static&quot;</div>
      <h6>📃. Knowledge base</h6>
      <div>﹘ Coming soon.</div>
      <h4>📃. Bundling</h4>
      <h5>📄. Webpack</h5>
      <h6>📝. Setup file(s)</h6>
      <div>
        ﹘<a href="https://github.com/papillonads/marketplace/blob/master/packages/core/webpack.settings.js">webpack.settings.js</a>
      </div>
      <div>
        ﹘<a href="https://github.com/papillonads/marketplace/blob/master/packages/core/webpack.common.js">webpack.common.js</a> shared by regular
        development and production builds
      </div>
      <div>
        ﹘<a href="https://github.com/papillonads/marketplace/blob/master/packages/core/webpack.develop.js">webpack.develop.js</a> for regular
        development build
      </div>
      <div>
        ﹘<a href="https://github.com/papillonads/marketplace/blob/master/packages/core/webpack.release.js">webpack.release.js</a> for regular
        production build
      </div>
      <div>
        ﹘<a href="https://github.com/papillonads/marketplace/blob/master/.storybook/webpack.config.js">webpack.config.js</a> for storybook build
      </div>
      <h6>📝. Script(s)</h6>
      <div>﹘&quot;build&quot;: &quot;webpack --config ./webpack/webpack-build.babel.js --mode=production&quot;</div>
      <div>﹘&quot;build-storybook&quot;: &quot;NODE_ENV=develop build-storybook -c .storybook -o .storybook-static&quot;</div>
      <h6>📃. Knowledge base</h6>
      <div>﹘ Coming soon.</div>
    </div>
  )
}

ProductMicrosites.propTypes = propTypes
ProductMicrosites.defaultProps = defaultProps

export const Compiling = {
  SpecificationsStandardsGuidelines,
  OpenSourceDependencyProjects,
  Implementation: {
    DesignSystemCore,
    ProductMicrosites,
  },
}
