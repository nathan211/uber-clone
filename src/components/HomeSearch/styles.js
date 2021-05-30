import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#dbdbdb',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6e6e6e'
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 50
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomColor: '#dbdbdb',
        borderBottomWidth: 1
    },
    iconContainer: {
        backgroundColor: '#bdbdbd',
        padding: 10,
        borderRadius: 25
    },
    destinationText: {
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 16,
    }
})

export default styles