import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';

import { HomeInfo } from "../components/home-info.component"

export const HomeScreen = () => (
    <SafeAreaView style={styles.container}> 

        <View style={styles.list}>
            <FlatList
                data={[{ name: 1}, {name: 2}]}
                renderItem={() => <HomeInfo />}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 20 }}
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