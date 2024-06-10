import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './src/navigation/main';
import React from 'react';
import { store } from './src/app/store';
import { Provider } from 'react-redux';


export default function App() {
  return (
    <Provider store={store}>
      <Tabs />
      <StatusBar style="dark" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
