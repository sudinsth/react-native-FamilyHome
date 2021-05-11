import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from "./app.navigation";

import { CustomerRegScreen } from "../features/Customer/screen/customer.screen";
import { RetailScreen } from "../features/Home/screens/retail";


const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
    return (
        <NavigationContainer>
        <HomeStack.Navigator headerMode="float">
            <HomeStack.Screen
                name="Home"
                component={AppNavigator}
                options={{
                    title: 'Family Home Christian Books',
                    headerStyle: {
                        backgroundColor: '#212121',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'normal',
                        marginVertical: 50,
                        fontSize: 24
                    },

                }}
            />
            <HomeStack.Screen
                name="CustomerReg"
                component={CustomerRegScreen}
                options={{
                    title: 'Customer Registration',
                    headerStyle: {
                        backgroundColor: '#212121',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'normal',
                        fontSize: 24,
                        
                    },

                }}
            />
            <HomeStack.Screen
                name="RetailStore"
                component={RetailScreen}
                options={{
                    title: 'Retail Store',
                    headerStyle: {
                        backgroundColor: '#212121',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'normal',
                        fontSize: 24
                    },

                }}
            />
        </HomeStack.Navigator>
        </NavigationContainer>
    );
};