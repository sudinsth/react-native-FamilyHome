import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';

import { HomeInfo } from "../components/home-info.component";

import Card from "../../../components/card";

const cardData = [
    {
        name: 'Customer Registration', 
    },
    {
        name: 'Retail Store',
    },
];


export const HomeScreen = () => (
    <SafeAreaView style={styles.container}> 

        <View style={styles.list}>
            {/* <FlatList
                data={[{ name: 1}, {name: 2}]}
                renderItem={() => <HomeInfo />}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 20 }}
            /> */}

            <FlatList 
                data={cardData}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Card>
                            <View>
                                <Image
                                    style={styles.image}
                                    source={require('../../../../assets/personImg.png')}
                                />
                            </View>    
                            <View>
                                <Text style={styles.cardTex}>{item.name}</Text>
                            </View>
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
    image: {
        height: 60,
        width: 60,
        margin: 10,
    },
    cardTex: {
        textAlign: 'left',
        fontSize: 20,
        marginBottom: 30
    },
  });