import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    autoCompleteContainer: {
        position: 'absolute',
        top: 0,
        left: 10,
        right: 10,
    },
    listView: {
        position: 'absolute',
        top: 102, 
    },
    container: {
        padding: 10,
        height: '100%',
    },
    textInput: {
        backgroundColor: '#eee',
        marginVertical: 5,
        padding: 10,
        marginLeft: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    iconContainer: {
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius: 25,
        marginRight: 15,
    },
    locationText: {

    },
    separator: {
        backgroundColor: '#efefef',
        height: 1,
    },
    circle: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 20,
        left: 15,
        borderRadius: 5
    },
    line: {
        width: 1,
        height: 45,
        backgroundColor: '#919191',
        position: 'absolute',
        top: 30,
        left: 16.5,
    },
    square: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 80,
        left: 15,
    }
})

export default styles