/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  StatusBar,
  PermissionsAndroid,
  Platform
} from 'react-native';
import 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation'; 

import Router from './src/navigation/Root'

navigator.geolocation = require('@react-native-community/geolocation');

const App: () => Node = () => {

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESSS_FINE_LOCATION,
        {
          title: "Uber Permission",
          message:
            "Uber needs access to your camera " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    } 
  }

  useEffect(() => {
    if(Platform.OS === 'android') {
      androidPermission()
    } else {
      Geolocation.requestAuthorization()
    }
  }, [])

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Router />
    </>
  );
};

export default App;
