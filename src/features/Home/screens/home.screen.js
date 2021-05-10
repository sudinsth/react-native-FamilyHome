import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import Card from "../../../components/card";
import { globalStyles } from '../../../styles/global';

const cardData = [
    {
        name: 'Customer Registration', 
        to: 'CustomerReg'
    },
    {
        name: 'Retail Store',
        to: 'RetailStore'
    },
];


export const HomeScreen = ({ navigation }) => (
    <SafeAreaView style={globalStyles.container}> 

        <View style={globalStyles.list}>

            <FlatList 
                data={cardData}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate(item.to)}>
                        <Card>
                                <Text style={globalStyles.cardTex}>{item.name}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>

    </SafeAreaView>
);