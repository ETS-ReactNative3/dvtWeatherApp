import { createSlice } from '@reduxjs/toolkit'


const weatherReducer = createSlice({
    name:"weather",
    initialState:{
        weatherData:{}
    },
    reducers:{
        setWeatherInfo: (state, action) => {
            state.weatherData = action.payload;
        },
        storeForecast: (state, action) => {
            state.weatherData = action.payload;
        },
        storeLocations: (state, action) => {
            state.weatherData = action.payload;
        }
    }
})

export const WEATHER_ACTIONS = weatherReducer.actions;


export default weatherReducer.reducer;