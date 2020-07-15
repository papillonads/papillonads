import { renderCustom, renderInfo, renderSuccess, renderWarning, renderError, renderIsDismissable } from './Toast.int.render'

describe('<Button />', () => {
  const onClickMockFn = jest.fn()

  describe('Event', () => {
    test('must call onClick() when isDismissable', () => {
      const mountCustomRender = global.renderMount(renderCustom(onClickMockFn))
      mountCustomRender.find('button').first().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      expect(mountCustomRender.props().onClick).toHaveBeenCalled()
    })
  })

  describe('Render', () => {
    test('must match renderInfo()', () => {
      expect(global.renderToJSON(renderInfo())).toMatchSnapshot()
    })

    test('must match renderSuccess()', () => {
      expect(global.renderToJSON(renderSuccess())).toMatchSnapshot()
    })

    test('must match renderWarning()', () => {
      expect(global.renderToJSON(renderWarning())).toMatchSnapshot()
    })

    test('must match renderError()', () => {
      expect(global.renderToJSON(renderError())).toMatchSnapshot()
    })

    test('must match renderIsDismissable()', () => {
      expect(global.renderToJSON(renderIsDismissable())).toMatchSnapshot()
    })
  })
})
