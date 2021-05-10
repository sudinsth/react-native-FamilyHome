import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import { globalStyles } from '../../../styles/global';

export const RetailScreen = () => (
    <SafeAreaView style={globalStyles.container}> 

        <View style={globalStyles.list}>

            <Text>Retail Store</Text>
        </View>

    </SafeAreaView>
);