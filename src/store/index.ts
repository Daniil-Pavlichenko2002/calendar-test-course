import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import reducers from './reducers'

export const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch