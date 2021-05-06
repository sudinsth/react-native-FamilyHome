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
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const cardData = [
    {
        name: 'Customer Registration',
        photo: '../../../../assets/personImg.png'  
    },
    {
        name: 'Retail Store',
        photo: '../../../../assets/personImg.png'
    },
];

export const ContactScreen = () => (
    <SafeAreaView style={styles.container}> 

        <View style={styles.list}>

        <Text>Contacts</Text>
        {/* <Card>
            <Card.Title>CARD WITH DIVIDER</Card.Title>
            <Card.Divider/>
            {
                cardData.map((u, i) => {
                return (
                    <View key={i} style={styles.user}>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={require('../../../../assets/personImg.png')}
                    />
                    <Text style={styles.name}>{u.name}</Text>
                    </View>
                );
                })
            }
        </Card> */}

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