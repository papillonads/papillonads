import { renderDefault } from './DisplayTable.int.render'

describe('<DisplayTable />', () => {
  describe('Render', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })
  })
})
