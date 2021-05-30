import React from 'react'
import { View, Text, Pressable } from 'react-native'

import styles from './styles'
import UberTypeRow from '../UberTypeRow'

import typesData from '../../assets/data/types.js'

const UserTypes = (props) => {

    const confirmUber = () => {
        console.warn('pressed')
    }

    return (
        <View>
            {
                typesData.map((type, index) => (
                    <UberTypeRow key={index } type={type} /> 
                ))
            }
            <Pressable 
                style={{
                    backgroundColor: 'black',
                    padding: 10,
                    margin: 10,
                    alignItems: 'center',
                }}
                onPress={confirmUber}
            >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Confirm Uber</Text>
            </Pressable>
        </View>
    )
}
 
export default UserTypes