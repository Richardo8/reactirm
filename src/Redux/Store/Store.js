import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as rootReducers from '../Reducers/userReducers'

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore)

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducers, initialState)
}