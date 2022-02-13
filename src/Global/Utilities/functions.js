import Snackbar from "react-native-snackbar";

export const disableTopBar = (componentName) => {
    return componentName.options = {
        topBar: {
            visible: false,
        }
    };

}


export const snackbar = (message) => {
    return Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: "red"
    })
}


export const kelvinToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
}


export const extractDays = (value) => {

    switch (value) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "saturday"
        case 0:
            return "Sunday"
        default:
            return "";

    }

}