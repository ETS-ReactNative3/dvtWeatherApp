import { createSlice } from '@reduxjs/toolkit'


const weather = createSlice({
    name:"weather",
    initialState:{
        weatherData:{}
    },
    reducers:{
        updateWeatherInfo: (state, action) => {
            state.weatherData = action.payload;
        }
    }
})


export default weather.reducer;