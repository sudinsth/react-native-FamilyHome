import { StyleSheet, StatusBar } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    list: {
        flex: 1,
        backgroundColor: '#F3F5F4',
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
        padding: 8,
        fontSize: 18,
        borderRadius: 6,
        marginVertical: 12
    },
    formText: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 16
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalContent: {
        flex: 1,
    },
    modalToggle: {
        backgroundColor: "#F9F9F9",
        padding: 20,
        borderRadius: 6,
    }
  });