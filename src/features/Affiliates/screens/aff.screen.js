import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text
} from 'react-native';

import Card from "../../../components/card";

const cardData = [
    {name: 'Affiliate Registration'   },
    {name: 'Affiliate Store'},
    {name: 'Sales Aids'},
];


export const AffiliatesScreen = () => (
    <SafeAreaView style={styles.container}> 

        <View style={styles.list}>

            <FlatList 
                data={cardData}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Card>
                            <Text >{item.name}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>

    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    appBar: {
        backgroundColor: 'black',
    },
    list: {
        flex: 1,
        // padding: 16,
        backgroundColor: '#F3F5F4'
    },
  
  });