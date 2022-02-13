import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { PermissionsAndroid, Platform, View, Text } from 'react-native';
import { disableTopBar, snackbar, } from '../../Global/Utilities/functions';
import Geolocation from 'react-native-geolocation-service';
import CurrentWeather from './Views/currentConditions';
import WeatherForecast from './Views/weatherFocast';
import LocationDeniedView from '../Location/locationDenied';
import { getWeatherInfo, storeForecastInfo } from "../../Redux/Actions/weatherActions";
import { FlatList } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';





const Home = () => {
    const dispatch = useDispatch();
    const [location, setLocation] = useState({ latitude: "", longitude: "" });
    const { weatherData, weatherLoading } = useSelector(state => state.weather);
    const { weatherForecastData, forecastLoading } = useSelector(state => state.forecast);
    const [checkPermision, setPermission] = useState(false);

    const backgroundColorChange = (clouds) => {
        switch (clouds) {
            case "Clouds":
                return '#54717A'
            case "Clear":
                return '#47AB2F'
            case "Rain":
                return '#57575D'
            default:
                return '#47AB2F'
        }
    }

    useEffect(() => {
        if (location.latitude.length > 3 && !weatherLoading) {
            dispatch(getWeatherInfo(location.latitude, location.longitude))
            dispatch(storeForecastInfo(location.latitude, location.longitude))
        }
    }, [location])

    useEffect(() => {
        accessLocationPermissions();
        getUserCurrentLocation()

    }, [])

    // Get access to user location once user has acted on request to access location.
    const getUserCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: JSON.stringify(position.coords.latitude),
                    longitude: JSON.stringify(position.coords.longitude)
                })
            },
            (error) => {
                snackbar(error.message)
                // See error code charts below.
            },
            { enableHighAccuracy: false, timeout: 15000, maximumAge: 1000 * 60 * 5 }
        );
    }

    // Get user action on access location
    const accessLocationPermissions = async () => {

        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: 'Dvt Weather App',
                        message: 'This application needs access to your location ' +
                            'so you can get the weather',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    getUserCurrentLocation()
                } else {
                    setPermission(true)
                    snackbar('Location Permission Denied')
                }
            } catch (err) {
                console.warn(err);
            }
        }
    }
    return (
        <>
            {checkPermision ? <LocationDeniedView /> :
                <View style={{ backgroundColor: backgroundColorChange(weatherData.weather ?weatherData.weather[0].main:"Clear"), height: "100%" }}>
                    <CurrentWeather
                        location={weatherData.name}
                        temp={weatherData.main?.feels_like}
                        temp_max={weatherData.main?.temp_max}
                        temp_min={weatherData.main?.temp_min}
                        clouds={weatherData.weather ? weatherData.weather[0].main : "loading"} />

                    {weatherForecastData?.list && Array.isArray(weatherForecastData?.list) && weatherForecastData?.list.length > 0 &&

                        <FlatList
                            data={weatherForecastData.list}
                            renderItem={weather => <WeatherForecast weather={weather} />}
                        />

                    }



                </View>}
            <Spinner
                visible={ weatherLoading || forecastLoading }
                textContent={'Just a moment...'}
                textStyle={{ color: 'green',fontSize:15 }}
            />

        </>
    );
}

disableTopBar(Home);



export default Home;