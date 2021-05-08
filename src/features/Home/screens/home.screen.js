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
                            {/* <View>
                                <Image
                                    style={styles.image}
                                    source={require('../../../../assets/personImg.png')}
                                />
                            </View>     */}
                            <View>
                                <Text style={globalStyles.cardTex}>{item.name}</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>

    </SafeAreaView>
);