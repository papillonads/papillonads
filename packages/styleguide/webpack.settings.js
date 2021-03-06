// webpack.settings.js - webpack settings config

// node modules
require('dotenv').config()

// Webpack settings exports
module.exports = {
  name: 'Primer Styleguide Docs',
  copyright: 'MTS',
  paths: {
    src: {
      base: './src/',
    },
    build: {
      base: './build/',
      clean: ['./**'],
    },
  },
  urls: {
    publicPath: '/papillonads/styleguide/',
  },
  vars: {
    cssName: 'styles',
  },
  entries: {
    app: 'index.js',
  },
  devServerConfig: {
    public: () => process.env.DEVSERVER_PUBLIC || 'http://localhost:8083',
    host: () => process.env.DEVSERVER_HOST || 'localhost',
    poll: () => process.env.DEVSERVER_POLL || false,
    port: () => process.env.DEVSERVER_PORT || 8083,
    https: () => process.env.DEVSERVER_HTTPS || false,
  },
  manifestConfig: {
    basePath: '',
  },
  webappConfig: {
    logo: './src/img/favicon-src.png',
    prefix: 'img/favicons/',
  },
}
