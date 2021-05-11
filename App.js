import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from 'react';
import { SafeAreaView } from 'react-native';

import { globalStyles } from "./src/styles/global";

import { HomeNavigator } from "./src/navigation/home.navigator";

export default function App () {
  return (
    <SafeAreaView style={globalStyles.container}>

        <HomeNavigator />

      <ExpoStatusBar style="auto"/>
    </SafeAreaView>
      
  );
}
