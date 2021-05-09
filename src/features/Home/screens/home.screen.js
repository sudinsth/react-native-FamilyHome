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
    },
    {
        name: 'Retail Store',
    },
];


export const HomeScreen = () => (
    <SafeAreaView style={globalStyles.container}> 

        <View style={globalStyles.list}>

            <FlatList 
                data={cardData}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Card>
                                <Text style={globalStyles.cardTex}>{item.name}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>

    </SafeAreaView>
);