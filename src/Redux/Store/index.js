import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import weatherReducer from "../Reducers/reducer"
const reducer = combineReducers({
    weatherReducer,
})
const store = configureStore({
  reducer,
})
export default store;