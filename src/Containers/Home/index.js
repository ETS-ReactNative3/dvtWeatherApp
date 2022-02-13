import React, { useEffect,useState } from 'react';
import { PermissionsAndroid, Platform, View, Text } from 'react-native';
import { disableTopBar,snackbar } from '../../Global/Utilities/functions';
import Geolocation from 'react-native-geolocation-service';




const Home = () => {
    const [location, setLocation] = useState({langitude:"",latitude:""});

    useEffect(() => {
        accessLocationPermissions()
    },[])


    // Get access to user location once user has acted on request to access location.
    const getUserCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude:JSON.stringify(position.coords.latitude),
                    longitude:JSON.stringify(position.coords.longitude)
                })
            },
            (error) => {
                snackbar(error.message)
                // See error code charts below.
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
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
                    snackbar('Location Permission Denied')
                }


            } catch (err) {
                console.warn(err);
            }

        }
    }
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
}

disableTopBar(Home);



export default Home;