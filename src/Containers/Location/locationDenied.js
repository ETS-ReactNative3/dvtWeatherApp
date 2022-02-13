import React from 'react';
import {View,Text,Image,Linking, TouchableOpacity, Platform} from 'react-native';
import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher'



const LocationDeniedView = () => {

    const openAppSettings = () => { 
        if(Platform.OS==="ios"){
            Linking.openURL('app-settings:');
        }else {
            IntentLauncher.startActivity({
                action: 'android.settings.APPLICATION_DETAILS_SETTINGS',
                data: 'package:com.dvtweatherapp'
            })
        }
    }
    return (
        <View style={{alignItems:"center"}}>
            <Image source={require('../../Global/Utilities/Icons/noData.png')} style={{width:"100%",height:400}}/>
            <Text style={{fontSize:20, }}>No weather data to show </Text>

           <TouchableOpacity onPress={()=>openAppSettings()}>
                <Text style={{fontSize:20,color:"#3dcfe1"}}>Open Settings</Text>
           </TouchableOpacity>
        </View>
    )
}

export default LocationDeniedView;