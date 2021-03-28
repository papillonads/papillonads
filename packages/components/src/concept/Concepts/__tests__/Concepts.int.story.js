import { withCssResources } from '@storybook/addon-cssresources'
import { withTests } from '@storybook/addon-jest'
import { Concepts } from '../Concepts'
import results from '../../../../../../.jest-test-results.json'
import imageUrl from '../../../../../../.docs/image/safari-logo.jpg'

export default {
  title: 'Concepts/Index',
  component: Concepts,
  decorators: [withCssResources, withTests({ results })],
  parameters: {
    a11y: { disable: true },
    assets: [
      imageUrl, // link to a file imported
      'https://via.placeholder.com/300/09f/fff.png', // link to an external image
      'https://www.example.com', // link to a webpage
      'https://www.example.com?id={id}', // link to a webpage with the current story's id in the url
    ],
    cssresources: [
      {
        id: `bluetheme`,
        code: `<style>body { background-color: lightblue; }</style>`,
        picked: false,
        hideCode: false,
      },
    ],
    jest: ['Concepts.int.test.js'],
  },
  excludeStories: ['custom'],
}

export function regular() {
  return <Concepts />
}
