import * as routes from "./apis";


const base_url = () => {
    return `https://api.openweathermap.org/data/2.5/`
}

const headers = {
    'Accept': '*/*',
    'Content-type': 'application/json',
}



export const currentWeather = (lat,lon) => {
   return  fetch(base_url()+routes.endPoint(lat,lon,'weather'), {
        method: 'GET',
        headers: headers
    }
    ).then((response) => response.json())
}


export const weatherForecast = (lat,lon) => {
    return fetch(base_url()+routes.endPoint(lat,lon,'forecast'), {
        method: 'GET',
        headers: headers
    }
    ).then((response) => response.json())
}