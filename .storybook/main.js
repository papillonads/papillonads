const path = require('path')

module.exports = {
  stories: ['../../packages/components/src/**/__tests__/*.story.js'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.int.render\.js?$/],
          include: [path.resolve(__dirname, '../packages/components')],
        },
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-notes',
    'storybook-addon-jsx',
  ],
}
