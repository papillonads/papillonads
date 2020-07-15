const path = require('path')
const DotEnvPlugin = require('dotenv-webpack')

const modulesPath = path.resolve(__dirname, '../packages')

module.exports = ({ config, mode }) => {
  const fileLoaderRuleSVG = config.module.rules.find((rule) => rule.test.test && rule.test.test('.svg'))
  fileLoaderRuleSVG.exclude = /\.svg$/

  const fileLoaderRuleJSX = config.module.rules.find((rule) => rule.test.test && rule.test.test('.jsx'))
  fileLoaderRuleJSX.use[0].options.plugins.push(
    path.resolve(__dirname, '../node_modules/@babel/plugin-transform-modules-commonjs/lib/index.js'),
  )

  fileLoaderRuleJSX.use[0].options.plugins.push(path.resolve(__dirname, '../node_modules/babel-plugin-syntax-async-functions/lib/index.js'))

  config.module.rules = config.module.rules.concat([
    {
      test: /\.(css|scss)$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            sourceMap: true,
            modules: {
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: () => [require('postcss-preset-env')()],
            parser: 'postcss-scss',
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [modulesPath],
            },
          },
        },
      ],
    },
    {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    },
  ])

  return config
}
