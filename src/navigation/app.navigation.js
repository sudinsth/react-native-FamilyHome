import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

import {HomeNavigator} from "../navigation/home.navigator";

import { AffiliatesScreen } from "../features/Affiliates/screens/aff.screen";
import { ContactScreen } from "../features/Contacts/screens/contact.screen";


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

export const AppNavigator = () => (
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
                  height: 5
                }
              }}
            >
            <Tab.Screen name="Home" component={HomeNavigator} />
            <Tab.Screen name="Affiliates" component={AffiliatesScreen} />
            <Tab.Screen name="Contacts" component={ContactScreen} />
        </Tab.Navigator>
   </NavigationContainer>
);

        
 