import {weather } from "../../../src/Redux/Reducers/weather";

describe("weather reducer", () => {
    it("should retrun initial state on weather reducer", () => {
        const initialState = {
            error: "",
            weatherLoading: false,
            weatherData: [],
        }

        expect(weather(undefined, {})).toEqual(
            initialState
          );
    })
})

