import { WEATHER_ACTIONS } from "../Reducers/weatherReducer";
import * as TYPES from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
/*
AsyncStorage: This would have been used to store data device to allow for offline view
Location that we could save :
       - User Location
       - User forecast
AsyncStorage.setItem('Locations', JSON.stringify(locations));

*/
import { currentWeather, weatherForecast } from "../Network/fetch"


export const getWeatherInfo = (lat, lon) => dispatch => {
    dispatch({ type: TYPES.LOADING });

    currentWeather(lat, lon).then(response => {
        try {
            if (response) {
                dispatch({ type: TYPES.GET_WEATER_INFO, payload: response });
            }
        } catch (err) {
            dispatch({ type: TYPES.ERROR });
        }
    })
}


export const storeForecastInfo =  (lat, lon) => dispatch => {
    dispatch({ type: TYPES.LOADING });
     weatherForecast(lat, lon).then(response => {
        try {
            if (response) {
                dispatch({ type: TYPES.GET_WEATHER_FORECAST, payload: response });
            }
        } catch (err) {
            dispatch({ type: TYPES.ERROR });
        }
    })
}


// export const storeLocationsInfo = async (Location) => {
//     return (dispatch) => {
//         if (trigger) {
//             dispatch(WEATHER_ACTIONS.storeLocations(data))
//             try {
//                 const dataToStore = JSON.stringify(data);
//                 await AsyncStorage.setItem('Locations', dataToStore);
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     }
// }