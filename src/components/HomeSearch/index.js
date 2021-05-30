import React from 'react'
import { View, Text } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'

const HomeSearch = (props) => {
    return (
        <View>
            <View style={styles.inputBox}>
                <Text style={styles.inputText}>Where to?</Text>
                <View style={styles.timeContainer}>
                    <AntDesign name='clockcircle' size={16} />
                    <Text>Now</Text>
                    <MaterialIcons name='keyboard-arrow-down' size={16} />
                </View>
            </View>

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