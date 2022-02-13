import {  Image } from "react-native";
import React from "react";
import { Box, HStack, Text } from "native-base";


const WeatherForecast = () => {
    return (
        <HStack p={3} justifyContent={'space-between'}>
            <Box>
                <Text color={'white'}>Monday</Text>
                <Text color={'white'}>8:00</Text>
            </Box>
            <Box>
                <Image source={require( '../../../Global/Utilities/Icons/rain.png')} style={{ width: 20, height: 20 }} />
            </Box>
            <Box>
                <Text color={'white'}>90°</Text>
            </Box>
        </HStack>
    )
}

export default WeatherForecast;