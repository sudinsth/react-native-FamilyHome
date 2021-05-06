import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from 'react';
import { Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { Appbar } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

import { HomeScreen } from "./src/features/Home/screens/home.screen";

const Tab = createMaterialTopTabNavigator();

const Affiliates = () => <Text>Affiliates</Text>
const Contacts = () => <Text>Contacts</Text>

export default function App () {
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title='Family Home Christian Books' />
      </Appbar.Header>

      <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = "md-home-outline";
                } else if (route.name === "Affiliates") {
                  iconName = "md-checkbox-outline";
                } else if (route.name === "Contacts") {
                  iconName = "md-people-outline";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={30} color={color} />;
              },
            })}
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
            <Tab.Screen name="Affiliates" component={Affiliates} />
            <Tab.Screen name="Contacts" component={Contacts} />
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
  list: {
      flex: 1,
      // padding: 16,
      backgroundColor: '#F3F5F4'
  },

});
