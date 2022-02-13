/*
 setUp rootNavigationOptions here
This allows us to reuse code such as moveToHomeScreen
*/
import { Navigation } from "react-native-navigation";
import {screensRegistartion} from "./registerScreens";


const rootNavigationOptions = () => {
    Navigation.setDefaultOptions({
        topBar: {
            elevation: 0,
            backgroundColor: "white",
            leftButtonColor: "black",
            barStyle: "default",
            noBorder: true,
            background: {
                color: "#fff",
            },
            backButton: {
                color: "black",
                visible: true
            }
        },
        layout: {
            orientation: ["portrait"]
        }
    })
}

export const  goHome = () => {
    screensRegistartion();
    Navigation.setRoot({
        root: {
            stack: {
                id: "Home",
                children: [
                    {
                        component: {
                            name: "Home"
                        }
                    }
                ],
                options: {
                    topBar:
                        {
                            visible: true,
                            backButton: {
                                visible: false
                            }
                        }
                }
            }
        }
    })
}

export const setUpRootInitializer = () => {
    screensRegistartion();
    Navigation.events().registerAppLaunchedListener(() => {
        rootNavigationOptions();
        Navigation.setRoot({
            root: {
                stack: {
                    id: "App",
                    children: [
                        {
                            component: {
                                name: "App"
                            }
                        }
                    ],
                    options: {
                        topBar:
                        {
                            visible: false,
                            height: 0,
                        }
                    }
                }
            }
        })
    })

}