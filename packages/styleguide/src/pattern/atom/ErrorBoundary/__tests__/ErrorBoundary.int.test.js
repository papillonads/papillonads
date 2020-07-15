import { defaultRender } from './ErrorBoundary.int.render'

describe('<ErrorBoundary />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
