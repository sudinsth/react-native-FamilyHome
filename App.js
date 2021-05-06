import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from 'react';
import { Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { Appbar } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

import { HomeScreen } from "./src/features/Home/screens/home.screen";
import { AffiliatesScreen } from './src/features/Affiliates/screens/aff.screen';
import { ContactScreen } from './src/features/Contacts/screens/contact.screen';

const Tab = createMaterialTopTabNavigator();

const TAB_ICON = {
  Home: "md-home-outline",
  Affiliates: "md-checkbox-outline",
  Contacts: "md-people-outline"
}


const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ color }) => (
    <Ionicons name={iconName} size={30} color={color} />
    ),
  }
}
export default function App () {
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title='Family Home Christian Books' />
      </Appbar.Header>

      <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "white",
              inactiveTintColor: "white",
              showIcon: true,
              style: {
                backgroundColor: '#4E4D58',
              },
              iconStyle:{
                marginBottom: 10,
                width: 30
              },
              labelStyle: {
                fontSize: 18,
              },
              indicatorStyle: {
                backgroundColor: 'green',
                height: 6
              }
            }}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Affiliates" component={AffiliatesScreen} />
            <Tab.Screen name="Contacts" component={ContactScreen} />
          </Tab.Navigator>
        </NavigationContainer>



      <ExpoStatusBar style="auto" />
    </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: StatusBar.currentHeight
  },
  appBar: {
      backgroundColor: 'black',
  },

});
