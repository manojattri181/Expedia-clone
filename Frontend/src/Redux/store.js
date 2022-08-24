import { legacy_createStore,applyMiddleware,combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { AppReducer } from './App-reducer/AppReducer'
import { AuthReducer } from './Auth-reducer/AuthReducer'

const rootRuducer = combineReducers({AppReducer,AuthReducer})

 export const store = legacy_createStore(rootRuducer,applyMiddleware(thunk))