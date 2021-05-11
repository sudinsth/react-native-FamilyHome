import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import Card from "../../../components/card";
import { globalStyles, iconImages } from '../../../styles/global';

const cardData = [
    {
        name: 'Customer Registration', 
        to: 'CustomerReg',
        img: 'person'
    },
    {
        name: 'Retail Store',
        to: 'RetailStore',
        img: 'dollar'
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
                            <View>
                                <Image
                                    style={globalStyles.image}
                                    source={iconImages.Imgicon[item.img]}
                                />
                            </View>
                            <View>
                                <Text style={globalStyles.cardTex}>{item.name}</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>

    </SafeAreaView>
);