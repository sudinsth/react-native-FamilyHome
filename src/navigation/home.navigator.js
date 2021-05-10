import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../features/Home/screens/home.screen";
import { CustomerRegScreen } from "../features/Customer/screen/customer.screen";
import { RetailScreen } from "../features/Home/screens/retail";


const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
    return (
        <HomeStack.Navigator headerMode="float">
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Family Home Christian Books',
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <HomeStack.Screen
                name="CustomerReg"
                component={CustomerRegScreen}
                options={{
                    title: 'Customer Registration',
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <HomeStack.Screen
                name="RetailStore"
                component={RetailScreen}
                options={{
                    title: 'Retail Store',
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </HomeStack.Navigator>
    );
};