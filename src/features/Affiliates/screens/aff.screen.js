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

import { globalStyles } from '../../../styles/global';

const cardData = [
    {name: 'Affiliate Registration'   },
    {name: 'Affiliate Store'},
    {name: 'Sales Aids'},
];


export const AffiliatesScreen = () => (
    <SafeAreaView style={globalStyles.container}> 

        <View style={globalStyles.list}>

            <FlatList 
                data={cardData}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Card>
                            {/* <View>
                                <Image
                                    style={globalStyles.image}
                                    source={require('../../../../assets/personImg.png')}
                                />
                            </View>     */}
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