import { LOADING, ERROR, GET_WEATHER_FORECAST } from '../Actions/constants';


let initialState = {
    error: "",
    forecastLoading: false,
    weatherForecastData: [],
}


const forecast =  (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                weatherForecastData: action.payload,
                forecastLoading: true,
            }
        case GET_WEATHER_FORECAST:
            return {
                ...state,
                weatherForecastData: action.payload,
                forecastLoading: false,
            }
        case ERROR:
            return {
                ...state,
                weatherForecastData: action.payload,
                forecastLoading: false,
            }
        default:
            return state;
    }
}

export default forecast;