import React from 'react';
import { View, Text,TouchableOpacity,ImageBackground } from "react-native";
import {Box, Center, Heading, HStack} from "native-base";


const CurrentWeather = () => {

    return (
        <View>
            <ImageBackground source={require('../../../Global/Utilities/Images/forest_sunny.png')} resizeMode="cover"
                style={{
                    paddingTop: 80,
                    paddingBottom: 150,
                    justifyContent: "center",
                    width: '100%',
                }}>
                <TouchableOpacity 
                    style={{ position: 'absolute', color: '#3dcfe1', top: 10, right: 10 }}>
                </TouchableOpacity>
                <Center p={3}>
              
                    <Heading color={'white'} size="2xl">600°</Heading> 
                    <Heading color={'white'} size="4xl">ttttttt</Heading>
                </Center>
            </ImageBackground>
            <HStack p={2} justifyContent={'space-between'} style={{marginLeft:8,marginRight:8}}>
                <Box>
                    <Text color={'white'}>20°</Text>
                    <Text color={'white'}>Min</Text>
                </Box>
                <Box>
                    <Text color={'white'}>20°</Text>
                    <Text color={'white'}>Current</Text>
                </Box>
                <Box>
                    <Text color={'white'}>20°</Text>
                    <Text color={'white'}>Max</Text>
                </Box>
            </HStack>
        </View>
    )
}

export default CurrentWeather;