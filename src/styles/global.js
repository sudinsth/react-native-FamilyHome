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
        marginVertical: 18,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    cardTex: {
        fontSize: 20,
        flex: 1,
        textAlignVertical: 'center',
    },
    iconImg: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        flex: 1,
    },
    input: {
        borderWidth: 1,
        borderColor: '#646464',
        padding: 8,
        fontSize: 18,
        borderRadius: 6,
        marginVertical: 8
    },
    formText: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 18
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
       
    },
    image: {
        borderColor: 'green',
        height: 60,
        width: 60,
        marginRight: 10,

        flex:1,
        alignItems: "flex-start", 
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 50,
    }
  });

  export const iconImages = {
    Imgicon: {
        'person': require('../../assets/personImg.png'),
        'dollar': require('../../assets/dollaImg.png'),
        'check': require('../../assets/checkImg.png')
    }
  }