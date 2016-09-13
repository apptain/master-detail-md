import {applyMiddleware, createStore, combineReducers} from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import thunk from 'redux-thunk'
import reducers from './reducers/global'

let middleware = [ thunk, apiMiddleware ]

export default createStore(
  combineReducers(reducers),
  applyMiddleware(...middleware)
)

