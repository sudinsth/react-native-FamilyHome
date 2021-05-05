import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from 'react';

import { HomeScreen } from "./src/features/Home/screens/home.screen";
const App = () => {
  return (
    <>
    <HomeScreen />
    <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;

