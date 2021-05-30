import React from 'react'
import { View, Text, Pressable } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

const HomeSearch = (props) => {
    const navigation = useNavigation()

    const goToSearch = () => {
        navigation.navigate('DestinationSearch')
    }

    return (
        <View>
            <Pressable onPress={goToSearch} style={styles.inputBox}>
                <Text style={styles.inputText}>Where to?</Text>
                <View style={styles.timeContainer}>
                    <AntDesign name='clockcircle' size={16} />
                    <Text>Now</Text>
                    <MaterialIcons name='keyboard-arrow-down' size={16} />
                </View>
            </Pressable>

            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name='clockcircle' size={20} color='#fff' />
                </View> 
                <Text style={styles.destinationText}>Spin Nightclub</Text>
            </View>

            <View style={styles.row}>
                <View style={[styles.iconContainer, { backgroundColor: '#218cff' }]}>
                    <AntDesign name='home' size={20} color='#fff' />
                </View>
                <Text style={styles.destinationText}>Home</Text>
            </View>
        </View>
    )
}

export default HomeSearch