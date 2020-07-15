import {
  renderCustom,
  renderDefault,
  renderDefaultLarge,
  renderBottom,
  renderBottomRight,
  renderBottomLeft,
  renderLeft,
  renderLeftBottom,
  renderLeftTop,
  renderRight,
  renderRightBottom,
  renderRightTop,
  renderTopLeft,
  renderTopRight,
} from './Popover.int.render'

describe('<Popover />', () => {
  const introOnClickMockFn = jest.fn()
  const acknowledgeOnClickMockFn = jest.fn()

  describe('Event', () => {
    test('must call introOnClick()', () => {
      const mountCustomRender = global.renderMount(renderCustom(introOnClickMockFn, acknowledgeOnClickMockFn))
      mountCustomRender.find('button').first().simulate('click')
      expect(mountCustomRender.props().introOnClick).toBe(introOnClickMockFn)
      expect(mountCustomRender.props().introOnClick).toHaveBeenCalled()
    })

    test('must call acknowledgeOnClick()', () => {
      const mountCustomRender = global.renderMount(renderCustom(introOnClickMockFn, acknowledgeOnClickMockFn))
      mountCustomRender.find('button').last().simulate('click')
      expect(mountCustomRender.props().acknowledgeOnClick).toBe(acknowledgeOnClickMockFn)
      expect(mountCustomRender.props().acknowledgeOnClick).toHaveBeenCalled()
    })
  })

  describe('Render', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })

    test('must match renderDefaultLarge()', () => {
      expect(global.renderToJSON(renderDefaultLarge())).toMatchSnapshot()
    })

    test('must match renderBottom()', () => {
      expect(global.renderToJSON(renderBottom())).toMatchSnapshot()
    })

    test('must match renderBottomRight()', () => {
      expect(global.renderToJSON(renderBottomRight())).toMatchSnapshot()
    })

    test('must match renderBottomLeft()', () => {
      expect(global.renderToJSON(renderBottomLeft())).toMatchSnapshot()
    })

    test('must match renderLeft()', () => {
      expect(global.renderToJSON(renderLeft())).toMatchSnapshot()
    })

    test('must match renderLeftBottom()', () => {
      expect(global.renderToJSON(renderLeftBottom())).toMatchSnapshot()
    })

    test('must match renderLeftTop()', () => {
      expect(global.renderToJSON(renderLeftTop())).toMatchSnapshot()
    })

    test('must match renderRight()', () => {
      expect(global.renderToJSON(renderRight())).toMatchSnapshot()
    })

    test('must match renderRightBottom()', () => {
      expect(global.renderToJSON(renderRightBottom())).toMatchSnapshot()
    })

    test('must match renderRightTop()', () => {
      expect(global.renderToJSON(renderRightTop())).toMatchSnapshot()
    })

    test('must match renderTopLeft()', () => {
      expect(global.renderToJSON(renderTopLeft())).toMatchSnapshot()
    })

    test('must match renderTopRight()', () => {
      expect(global.renderToJSON(renderTopRight())).toMatchSnapshot()
    })
  })
})
