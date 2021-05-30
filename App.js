/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar, SafeAreaView
} from 'react-native';

import SearchResults from './src/screens/SearchResults'
import HomeScreen from './src/screens/HomeScreen'

const App: () => Node = () => {

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SearchResults />
    </>
  );
};

export default App;
