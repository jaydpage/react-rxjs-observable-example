import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'
import { RootAction } from './root-action'
import { rootEpic } from './root-epic'
import { rootReducer, RootState } from './root-reducer'

const store = configureStore()

function configureStore() {
  const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>()
  const middleWares: any[] = [epicMiddleware]
  const middlewareEnhancer = applyMiddleware(...middleWares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, composedEnhancers)

  epicMiddleware.run(rootEpic)

  return store
}

export default store
