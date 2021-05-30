import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'contain'
    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10
    },
    time: {
        color: '#5d5d5d'
    },
    type: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5, 
    },
    rightContainer: {
        width: 100,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    }
})

export default styles 