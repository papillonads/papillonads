import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

export const getAppMockStore = (customAppState) => configureStore([thunk])(customAppState)
