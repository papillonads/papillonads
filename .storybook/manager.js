import { addons } from '@storybook/addons'
import { create } from '@storybook/theming/create'
import { designSystemTheme } from './designSystemTheme'

addons.setConfig({
  theme: designSystemTheme,
})
