import { StyleSheet, StatusBar } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

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
        backgroundColor: '#F3F5F4',
        fontFamily: 'Tahoma'
    },
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
        textAlignVertical: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardTex: {
        fontSize: 20,
        flex: 1,
    },
    iconImg: {
        alignItems: 'flex-end',
        flex: 1
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginVertical: 20
    },
    formText: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 18
    }
  });