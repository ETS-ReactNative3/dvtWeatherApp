/*
Separate concerns here we register the screens only

*/
import React from "react";
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../Redux/Store/index';
import App from "../../App";
import Home from "../Containers/Home/index";
import RootComponent from "./root";




export const screensRegistartion = () => {
    Navigation.registerComponent(
        "App", () => (props) =>
            <Provider store={store}>
                <RootComponent PassedComponent={App} componentProps={props} />
            </Provider>, () => App
    );

    Navigation.registerComponent(
        "Home", () => (props) =>
            <Provider store={store}>
                <RootComponent PassedComponent={Home} componentProps={props} />
            </Provider>, () => Home
    )
}