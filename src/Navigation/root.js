/*
Create a Root component wrapped by NativeBaseProvider which helps us set application theme globally
The NativeBaseProvider accepts initialWindowMetrics:{}, colorModeManager:() => and theme:{} 
Aglobal componnet also helps us define things like network connection status and snackbar

*/

import React, {useEffect, useState} from 'react';
import {LogBox} from "react-native";
import {NativeBaseProvider} from "native-base";
import NetInfo from "@react-native-community/netinfo";
import Snackbar from "react-native-snackbar";




LogBox.ignoreLogs(['NativeBase:']);


const RootComponent = ({PassedComponent, componentProps}) => {

    const [networkAvilable, setNetworkAvailability] = useState(false)

    useEffect(() => {
        netInfoEventListner();
        return () => {
            netInfoEventListner()
        }
    }, [])

    const netInfoEventListner = NetInfo.addEventListener(state => {
        // toggle network state to true or false based on connection status from netinfo
        if (state.isConnected != networkAvilable) setNetworkAvailability(state.isConnected);
        if(!state.isConnected)  Snackbar.show({
            text: 'No internet connection',
            duration: Snackbar.LENGTH_INDEFINITE,
        });        
    });

    return (
        <NativeBaseProvider >
            <PassedComponent {...componentProps} />
        </NativeBaseProvider>
    )
};
export default RootComponent;