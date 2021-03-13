import { regular } from './Concepts.int.story'

jest.mock('../Concepts.part', () => ({ stripDocument: () => {} }))

describe('<Concepts />', () => {
  describe('Snaphot', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
