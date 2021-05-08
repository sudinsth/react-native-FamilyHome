import { StyleSheet, StatusBar } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    appBar: {
        backgroundColor: 'black',
    },
    list: {
        flex: 1,
        backgroundColor: '#F3F5F4'
    },
    // image: {
    //     height: 60,
    //     width: 60,
    //     margin: 10,
    // },
    card: {
        elevation: 5,
        backgroundColor: "#fff",
        shadowOffset: { width:1, height:1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginVertical: 15,
        marginHorizontal: 20,
    },
    cardContent: {
        marginHorizontal: 10,
        marginVertical: 20,
        textAlignVertical: 'center'
    },
    cardTex: {
        // textAlign: 'left',
        fontSize: 20,
    },
    
  });