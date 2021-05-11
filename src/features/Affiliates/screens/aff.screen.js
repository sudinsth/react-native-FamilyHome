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
        name: 'Affiliate Registration', 
        img: 'person'
    
    },
    {
        name: 'Affiliate Store',
        img: 'dollar'
    },
    {
        name: 'Sales Aids',
        img: 'check'
    },
];


export const AffiliatesScreen = () => (
    <SafeAreaView style={globalStyles.container}> 

        <View style={globalStyles.list}>

            <FlatList 
                data={cardData}
                renderItem={({ item }) => (
                    <TouchableOpacity>
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