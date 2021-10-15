import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { AppState, reducers } from './reducers'

function configureStore() {
  const middlewares: any[] = []
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const rootReducer = combineReducers<AppState>(reducers)
  return createStore(rootReducer, composedEnhancers)
}

const store = configureStore()

export default store
