import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from 'react';
import { SafeAreaView } from 'react-native';

import { globalStyles } from "./src/styles/global";


import { Navigation } from "./src/navigation";

export default function App () {
  return (
    <SafeAreaView style={globalStyles.container}>

        <Navigation />

      <ExpoStatusBar style="auto" />
    </SafeAreaView>
      
  );
}
