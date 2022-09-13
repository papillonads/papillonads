/* eslint-disable */

// webpack.common.js - common webpack config

const LEGACY_CONFIG = 'legacy'
const MODERN_CONFIG = 'modern'

// node modules
const path = require('path')
const merge = require('webpack-merge').merge

// webpack plugins
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin')

// config files
const pkg = require('./package.json')
const settings = require('./webpack.settings.js')

// Configure Babel loader
const configureBabelLoader = (browserList) => {
  return {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              useBuiltIns: 'entry',
              corejs: '3.25.1',
              targets: {
                browsers: browserList,
              },
            },
          ],
          '@babel/preset-react',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-nullish-coalescing-operator',
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-proposal-optional-catch-binding',
          '@babel/plugin-proposal-optional-chaining',
          '@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-transform-classes',
          [
            '@babel/plugin-transform-react-jsx',
            {
              runtime: 'automatic',
            },
          ],
          '@babel/plugin-transform-runtime',
          '@babel/plugin-transform-spread',
          'syntax-async-functions',
        ],
      },
    },
  }
}

// Configure Entries
const configureEntries = () => {
  let entries = {}
  for (const [key, value] of Object.entries(settings.entries)) {
    entries[key] = path.resolve(__dirname, settings.paths.src.base + value)
  }

  return entries
}

const configureSVGLoader = () => {
  return {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  }
}

// Configure Markdown loader
const configureMarkdownLoader = () => {
  return {
    test: /\.md$/,
    use: [
      {
        loader: 'html-loader',
      },
      {
        loader: 'markdown-loader',
        options: {
          /* your options here */
        },
      },
    ],
  }
}

// Configure Font loader
const configureFontLoader = () => {
  return {
    test: /\.(ttf|eot|woff2?)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  }
}

// Configure Manifest
const configureManifest = (fileName) => {
  return {
    fileName: fileName,
    basePath: settings.manifestConfig.basePath,
    map: (file) => {
      file.name = file.name.replace(/(\.[a-f0-9]{32})(\..*)$/, '$2')
      return file
    },
  }
}

// Configure Clean webpack
const configureCleanWebpack = () => {
  return {
    root: path.resolve(__dirname, settings.paths.build.base),
    verbose: true,
    dry: false,
  }
}

// Configure Html webpack
const configureHtml = () => {
  return {
    title: 'Papillon Ads Documentation',
    meta: {
      viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    },
  }
}

// The base webpack config
const baseConfig = {
  name: pkg.name,
  entry: configureEntries(),
  output: {
    path: path.resolve(__dirname, settings.paths.build.base),
    publicPath: settings.urls.publicPath,
  },
  module: {
    rules: [configureSVGLoader(), configureMarkdownLoader(), configureFontLoader()],
  },
  plugins: [
    new CleanWebpackPlugin(configureCleanWebpack()),
    new HtmlWebpackPlugin(configureHtml()),
    new HtmlWebpackRootPlugin({
      tagName: 'div',
      tagId: 'app',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}

// Legacy webpack config
const legacyConfig = {
  module: {
    rules: [configureBabelLoader(Object.values(pkg.browserslist.legacyBrowsers))],
  },
  plugins: [new WebpackManifestPlugin(configureManifest('manifest-legacy.json'))],
}

// Modern webpack config
const modernConfig = {
  module: {
    rules: [configureBabelLoader(Object.values(pkg.browserslist.modernBrowsers))],
  },
  plugins: [new WebpackManifestPlugin(configureManifest('manifest.json'))],
}

// Common module exports
module.exports = {
  legacyConfig: merge(legacyConfig, baseConfig),
  modernConfig: merge(modernConfig, baseConfig),
}
