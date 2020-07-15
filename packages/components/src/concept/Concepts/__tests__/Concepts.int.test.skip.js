import { renderDefault } from './Concepts.int.render'

jest.mock('../Concepts.part', () => ({ stripDocument: () => {} }))

describe('<Concepts />', () => {
  describe('Snaphot', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })
  })
})
