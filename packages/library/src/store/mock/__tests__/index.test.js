import { getAppMockStore } from '../index'

describe('mock', () => {
  const customDataObject = { someCustomData: 'fantastic-custom-data' }

  describe('getAppMockStore()', () => {
    test('must return a store with custom data when custom data provided', () => {
      const store = getAppMockStore(customDataObject)

      expect(store.getState()).toMatchObject(customDataObject)
    })
  })
})
