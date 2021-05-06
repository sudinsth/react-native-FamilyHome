import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Text>{ props.children }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        elevation: 5,
        backgroundColor: "#fff",
        shadowOffset: { width:1, height:1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    cardContent: {
        marginHorizontal: 10,
        paddingVertical: 10,
    },
});