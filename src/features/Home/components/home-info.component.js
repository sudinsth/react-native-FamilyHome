import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { Card, IconButton, Avatar } from 'react-native-paper';

export const HomeInfo = () => {
    return (
        <View>
        {/* <Card style={styles.card}>
            <Card.Title 
                title = "Customer Registration"
                left={(props) => <Avatar.Icon {...props} icon="folder" />}
                right={(props) => <IconButton {...props} icon="" />}
        />
        </Card> */}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginBottom: 20,
    }
});