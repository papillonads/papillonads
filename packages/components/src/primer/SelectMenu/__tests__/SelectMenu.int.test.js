import { ariaAttr, items, renderCustom, renderDefault } from './SelectMenu.int.render'

jest.mock('@papillonads/library', () => {
  return {
    hooks: {
      react: {
        useState: () => {},
        useRef: () => {},
      },
    },
    array: {
      getIndexItems: () => {},
      getIndexItemsWithSelected: () => {},
    },
  }
})

const libraryMockObject = require('@papillonads/library')

describe('<SelectMenu />', () => {
  let indexItemsDataObject = [
    { ...items[0], index: 0 },
    { ...items[1], index: 1 },
    { ...items[2], index: 2 },
    { ...items[3], index: 3 },
  ]

  const newIndexItemsWithSelectedDataObject = [
    { ...items[0], index: 0, isSelected: true },
    { ...items[1], index: 1, isSelected: false },
    { ...items[2], index: 2, isSelected: false },
    { ...items[3], index: 3, isSelected: false },
  ]

  const newItemsDataObject = [
    { ...items[0], isSelected: true },
    { ...items[1], isSelected: false },
    { ...items[2], isSelected: false },
    { ...items[3], isSelected: false },
  ]

  const onClickMockFn = jest.fn()

  const setIndexItemsMockFn = jest.fn((indexItems) => {
    indexItemsDataObject = indexItems
  })

  beforeEach(() => {
    jest.spyOn(libraryMockObject.hooks.react, 'useState').mockImplementation(() => {
      return [indexItemsDataObject, setIndexItemsMockFn]
    })

    jest.spyOn(libraryMockObject.hooks.react, 'useRef').mockImplementation(() => {
      return {
        current: {
          removeAttribute: () => {},
        },
      }
    })

    jest.spyOn(libraryMockObject.array, 'getIndexItems').mockReturnValue(indexItemsDataObject)

    jest.spyOn(libraryMockObject.array, 'getIndexItemsWithSelected').mockReturnValue(newIndexItemsWithSelectedDataObject)
  })

  afterEach(() => jest.clearAllMocks())

  describe('Event', () => {
    test('must return new items without index when onClick()', () => {
      const mountCustomRender = global.renderMount(renderCustom(onClickMockFn))
      mountCustomRender.find('button').last().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      expect(mountCustomRender.props().onClick).toHaveBeenCalledWith({
        ariaAttr,
        items: newItemsDataObject,
      })
    })
  })

  describe('Render', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })
  })

  describe('State', () => {
    test('must reset new items with index when onClick()', () => {
      const mountCustomRender = global.renderMount(renderCustom(onClickMockFn))
      mountCustomRender.find('button').last().simulate('click')
      expect(setIndexItemsMockFn).toHaveBeenCalledWith(newIndexItemsWithSelectedDataObject)
      expect(indexItemsDataObject).toBe(newIndexItemsWithSelectedDataObject)
    })
  })
})
