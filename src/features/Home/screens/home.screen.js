import React from 'react';
import { Appbar } from "react-native-paper";
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { HomeInfo } from "../components/home-info.component"

const listTab = [
    {
      status: 'HOME',
    },
    {
      status: 'AFFILIATES',
    },
    {
      status: 'CONTACTS',
    },
  ];
export const HomeScreen = () => (
    <SafeAreaView style={styles.container}>
        <Appbar.Header style={styles.appBar}>
            <Appbar.Content title='Family Home Christian Books' />
        </Appbar.Header>

        <View style={styles.list}>
            <HomeInfo />
        </View>
    


      {/* <View style={styles.listTab}>
        {listTab.map((e) => (
          <TouchableOpacity style={styles.btnTab}>
            <Text style={styles.menuText}>{e.status}</Text>
          </TouchableOpacity>
        ))}
      </View> */}

      <View style={styles.homeMenu}>
        <Text style={styles.homeText}>
          Customer Registration
        </Text>
      </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    appBar: {
        backgroundColor: 'black'
    },
    list: {
        flex: 1,
        padding: 16,
        backgroundColor: blue
    },


    header: {
      flex: 0.06,
      padding: 20,
      backgroundColor: 'black',
    },
    listTab: {
      flex: 0.10,
      backgroundColor: 'gray',
      paddingVertical: 15,
      flexDirection: 'row',
      alignSelf: 'center',
      marginBottom: 20
    },
    btnTab: {
      flex: 1,
      flexDirection: 'row',
      borderWidth: 0.5,
      borderColor: 'gray',
      padding: 10,
      justifyContent: 'center',
    },
    menuText: {
      fontSize: 18,
      color: 'white',
    },
    headingText: {
      color: 'white',
      fontSize: 25,
      // alignItems: 'flex-start',
    },
    homeMenu: {
      flex: 0.08,
      backgroundColor: 'white',
      paddingTop: 10,
      alignContent: 'center'
    },
    homeText: {
      fontSize: 18,
      color: 'black',
      textAlign: 'center'
    }
  
  });