import { defaultRender } from './UnderConstruction.int.render'

describe('<UnderConstruction />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
