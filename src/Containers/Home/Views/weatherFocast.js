import {  Image } from "react-native";
import React from "react";
import { Box, HStack, Text } from "native-base";
import {extractDays,kelvinToCelsius}  from '../../../Global/Utilities/functions';
import moment from "moment";


const WeatherForecast = (props) => {
    const weatherIconSwitcher = (weather) => {
        switch (weather) {
            case 'Rain':
                return require( '../../../Global/Utilities/Icons/rain.png')
            case 'Clouds':
                return require( '../../../Global/Utilities/Icons/cloudy.png')
            case 'Clear':
                return require( '../../../Global/Utilities/Icons/sunny.png')
            default:
                return require( '../../../Global/Utilities/Icons/sunny.png')
                break;
        }

    }

    return (
        <HStack p={3} justifyContent={'space-between'} style={{marginLeft:8,marginRight:8}}>
            <Box>
                <Text color={'white'}>{extractDays(moment(props.weather.item.dt_txt).day())}</Text>
                <Text color={'white'}>{moment(props.weather.item.dt_txt).format("HH:mm")}</Text>
            </Box>
            <Box>
            <Image source={weatherIconSwitcher(props.weather.item.weather[0].main)} style={{width:20, height:20}}/>
            </Box>
            <Box>
                <Text color={'white'}>{kelvinToCelsius(props.weather.item?.main?.feels_like)}</Text>
            </Box>
        </HStack>
    )
}

export default WeatherForecast;