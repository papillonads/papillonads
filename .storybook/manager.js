import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

addons.setConfig({
  panelPosition: 'right',
  theme: create({
    base: 'light',
    brandTitle: 'Papillon Ads Components',
    brandUrl: 'https://github.com/papillonads/papillonads',
    brandImage: 'https://avatars2.githubusercontent.com/u/47340326',
  }),
})
