import { renderDefault } from './Label.int.render'

describe('<Label />', () => {
  describe('Render', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })
  })
})
