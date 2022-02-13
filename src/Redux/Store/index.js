import { configureStore } from '@reduxjs/toolkit'
import forecast from '../Reducers/forecast';
import weather from '../Reducers/weather';

const store = configureStore({
  reducer: {
    forecast: forecast,
    weather: weather
  },
})
export default store;