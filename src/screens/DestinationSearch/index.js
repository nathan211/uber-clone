import React, { useState, useEffect } from 'react'
import { View, SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete' 
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import PlaceRow from './PlaceRow'

const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};
 

const DestinationSearch = (props) => {
    const [originPlace, setOriginPlace] = useState(null)
    const [destinationPlace, setDestinationPlace] = useState(null)

    //const navigation = useNavigation()

    useEffect(() => {
       if(originPlace && destinationPlace){
           navigation.navigate('SearchResults', {
               originPlace,
               destinationPlace,
           })
       }
    }, [originPlace, destinationPlace])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    styles={{
                        textInput: styles.textInput,
                        container: styles.autoCompleteContainer,
                        listView: styles.listView,
                        separator: styles.separator
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles 
                    currentLocation
                    currentLocationLabel='Current location'
                    placeholder='From' 
                    onPress={(data, details = null) => {
                        setOriginPlace({data, details})
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyDAVkJhOyozepqOT7kly47FRl0e3C1UFOY',
                        language: 'en',
                    }} 
                    renderRow={(data) => <PlaceRow data={data} />}
                    renderDescription={(data) => data.description || data.vicinity}
                    predefinedPlaces={[homePlace, workPlace]}
                />
                <GooglePlacesAutocomplete
                    styles={{
                        textInput: styles.textInput,
                        container: {
                            ...styles.autoCompleteContainer,
                            top: 55 
                        },
                        separator: styles.separator
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({data, details})
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyDAVkJhOyozepqOT7kly47FRl0e3C1UFOY',
                        language: 'en',
                    }} 
                    renderRow={(data) => <PlaceRow data={data} />}
                    renderDescription={(data) => data.description || data.vicinity}
                    predefinedPlaces={[homePlace, workPlace]}
                />
                <View style={styles.circle} />
                <View style={styles.line} />
                <View style={styles.square} />
            </View>
        </SafeAreaView>
    )
}

export default DestinationSearch