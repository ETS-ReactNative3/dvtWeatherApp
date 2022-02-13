/**
 * @format
 */

import React from 'react';
import App from '../App';
import { NativeModules } from 'react-native';
import { Provider } from 'react-redux';;
import store from '../src/Redux/Store/index';

// import { useNetInfo } from "@react-native-community/netinfo";
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';




jest.mock("react-native-splash-screen", () => ({
  SplashScreen: jest.fn()

}));

jest.mock("react-native-splash-screen", () => {
  return {
    __esModule: true,
    default: jest.fn(() => {})
  };
});

jest.mock("react-native-intent-launcher", () => ({
  IntentLauncher: jest.fn()
}));

jest.mock("@react-native-community/netinfo", () => ({
  useNetInfo: jest.fn(),
}));


it("renders correctly", () => {
  renderer.create(
    <Provider store={store}>
      <App test={true} />
    </Provider>
  );
});

jest.mock("react-native-navigation", () => ({
  hideOnScroll: jest.fn()
}));

jest.mock("react-native-snackbar", () => ({
  LENGTH_LONG: "long",
}));

jest.mock("react-native-geolocation-service", () => ({
  Geolocation: jest.fn(),
}));

jest.mock("@react-native-async-storage/async-storage", () => ({
  AsyncStorage: jest.fn()
}));

jest.mock("react-native-loading-spinner-overlay", () => ({
  Spinner: jest.fn()
}));

// jest.mock('react-native-device-info', () => ({
//     getVersion: jest.fn(() => Promise.resolve('1.0')),
//     getApplicationName: jest.fn(() => Promise.resolve('My App'))
// }))

NativeModules.RNCNetInfo = {
  getCurrentConnectivity: jest.fn(),
  isConnectionMetered: jest.fn(),
  addListener: jest.fn(),
  removeListeners: jest.fn()
};




export default {
  getCurrentConnectivity: jest.fn(),
  isConnectionMetered: jest.fn(),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
  isConnected: {
    fetch: () => {
      return Promise.resolve(true);
    },
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  },
};
export const useNetInfo = () => ({})
