import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Box, Center, Heading, HStack } from "native-base";
import { kelvinToCelsius } from '../../../Global/Utilities/functions';


const CurrentWeather = (props) => {
    const changeWeatherName = (weather) => {
        switch (weather) {
            case "Clouds":
                return "Cloudy"
            case "Clear":
                return "sunny"
            case "Rain":
                return "rainy"
            default:
                return "...."
        }
    }


    const makeViewDynamic = (clouds) => {
        switch (clouds) {
            case "Clouds":
                return require('../../../Global/Utilities/Images/forest_cloudy.png')
            case "Clear":
                return require('../../../Global/Utilities/Images/forest_sunny.png')
            case "Rain":
                return require('../../../Global/Utilities/Images/forest_rainy.png')
            default:
                return require('../../../Global/Utilities/Images/loadingState.jpeg')
        }
    }
    return (
        <View>
            <ImageBackground source={makeViewDynamic(props.clouds)} resizeMode="cover"
                style={{
                    paddingTop: props.clouds==="loading" ?"100%":80,
                    paddingBottom:  props.clouds==="loading" ?"100%":150,
                    justifyContent: "center",
                    width: '100%',
                }}>
                <TouchableOpacity
                    style={{ position: 'absolute', color: '#3dcfe1', top: 10, right: 10 }}>
                </TouchableOpacity>
                <Center p={3}>

                    <Heading color={'white'} size="2xl">{ props.clouds==="loading" ? "": kelvinToCelsius(props.temp) }°</Heading>
                    <Heading color={'white'} size="4xl">{changeWeatherName(props.clouds)}</Heading>
                    <Heading color={'white'} size="2xl">{props.location}</Heading>
                </Center>
            </ImageBackground>
            <HStack p={2} justifyContent={'space-between'} style={{ marginLeft: 8, marginRight: 8 }}>
                <Box>
                    <Text color={'white'}>{kelvinToCelsius(props.temp_min)}°</Text>
                    <Text color={'white'}>Min</Text>
                </Box>
                <Box>
                    <Text color={'white'}>{kelvinToCelsius(props.temp)}°</Text>
                    <Text color={'white'}>Current</Text>
                </Box>
                <Box>
                    <Text color={'white'}>{kelvinToCelsius(props.temp_max)}°</Text>
                    <Text color={'white'}>Max</Text>
                </Box>
            </HStack>
            <View style={{
                borderBottomColor: 'white',
                borderBottomWidth: 1,
            }} />
        </View>
    )
}

export default CurrentWeather;