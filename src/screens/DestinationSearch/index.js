import React, { useState, useEffect } from 'react'
import { View, Text, TextInput } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete' 

import styles from './styles'

const DestinationSearch = (props) => {
    const [originPlace, setOriginPlace] = useState(null)
    const [destinationPlace, setDestinationPlace] = useState(null)

    useEffect(() => {
       if(originPlace && destinationPlace){
           console.warn('Redirect to result.')
       }
    }, [originPlace, destinationPlace])

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                styles={{
                    textInput: styles.textInput
                }}
                placeholder='From'
                onPress={(data, details = null) => {
                    setOriginPlace({data, details})
                }}
                fetchDetails
                query={{
                    key: 'AIzaSyBtmyvg8fmyn5GZSRjHPhEC4PrXOjm5pZg',
                    language: 'en',
                }} 
            />
            <GooglePlacesAutocomplete
                styles={{
                    textInput: styles.textInput
                }}
                placeholder='Where to?'
                onPress={(data, details = null) => {
                    setDestinationPlace({data, details})
                }}
                fetchDetails
                query={{
                    key: 'AIzaSyBtmyvg8fmyn5GZSRjHPhEC4PrXOjm5pZg',
                    language: 'en',
                }} 
            />
        </View>
    )
}

export default DestinationSearch