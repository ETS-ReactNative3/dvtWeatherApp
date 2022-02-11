import { combineReducers } from 'redux'
import weatherReducer from "./weatherReducer"

const reducer = combineReducers({
  weather: weatherReducer,
})


export default reducer