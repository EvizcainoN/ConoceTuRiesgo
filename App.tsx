import React from 'react';
import { SafeAreaView, Platform, StatusBar, Text } from 'react-native';
import App from './app/Router';

export default class AppInit extends React.Component {
  
  render() {
    return (
      <SafeAreaView style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }}>
        <App />
      </SafeAreaView>
    );
  }
}