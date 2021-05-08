import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Formik } from 'formik';

import { globalStyles } from '../../../styles/global';

export const ContactScreen = () => (
    <SafeAreaView style={globalStyles.container}> 

        <View style={globalStyles.list}>
        <Card>
            <Card.Title>REGISTERED CUSTOMERS</Card.Title>
            <Card.Divider/>
            {
                <View>
                    <Formik 

                    />
                </View>
            }
        </Card>

        </View>

    </SafeAreaView>
);