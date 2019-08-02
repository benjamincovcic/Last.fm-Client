import { AppLoading } from 'expo';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import store from './src/core/store';
import AppNavigator from './src/navigation/AppNavigator';
import {createStackNavigator, StackNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen';
import LinksScreen from './src/screens/LinksScreen';
export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <AppScreen  style={styles.container}>
        </AppScreen>
      </Provider>
     
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
   
  ]);
}

function handleLoadingError(error: Error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
const AppStackNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Tracks: {screen: LinksScreen}
})
const AppScreen = createAppContainer(AppStackNavigator);

