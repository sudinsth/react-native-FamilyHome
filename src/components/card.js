import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Ionicons } from '@expo/vector-icons';

export default function Card(props) {
    return (
        <View style={globalStyles.card}>
            <View style={globalStyles.cardContent}>
                {/* <View style={{
                    flex:1, 
                    alignItems: "flex-start", 
                    flexGrow: 0,
                    flexShrink: 1,
                    flexBasis: 50,
                }}><Ionicons name="chevron-forward-outline" size={30} color="black" /></View> */}
                { props.children }
                <View style={globalStyles.iconImg}><Ionicons name="chevron-forward-outline" size={30} color="black" /></View>
            </View>
        </View>
    )
}
