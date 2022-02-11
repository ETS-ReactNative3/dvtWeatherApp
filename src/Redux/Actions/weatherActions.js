import { WEATHER_ACTIONS } from "../Reducers/weatherReducer";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const getWeatherInfo = async (data, trigger) => {
    return (dispatch) => {
        if (trigger) {
            dispatch(WEATHER_ACTIONS.setWeatherInfo(data))
            try {
                const dataToStore = JSON.stringify(data);
                await AsyncStorage.setItem('RecentWeatherData', dataToStore);

            } catch (error) {
                console.log(error);
            }
        }
    }

}


export const storeForecastInfo = async (data, trigger) => {

    return (dispatch) => {
        if (trigger) {
            dispatch(WEATHER_ACTIONS.storeForecast(data))
            try {
                const dataToStore = JSON.stringify(data);
                await AsyncStorage.setItem('Forecast', dataToStore);
            } catch (error) {
                console.log(error);
            }
        }
    }
}


export const storeLocationsInfo = async (data, trigger) => {
    return (dispatch) => {
        if (trigger) {
            dispatch(WEATHER_ACTIONS.storeLocations(data))
            try {
                const dataToStore = JSON.stringify(data);
                await AsyncStorage.setItem('Locations', dataToStore);
            } catch (error) {
                console.log(error);
            }
        }
    }
}