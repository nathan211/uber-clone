import React from 'react'
import { View, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBCi40AGPI8oGHg_l-X8A-qh4dLrzfV5gw'

const RouteMap = (props) => {

    const origin = {
        latitude: 28.450627,
        longitude: -16.263045,
    }

    const destination = {
        latitude: 28.460127,
        longitude: -16.269045,
    }

    return (
        <MapView
            style={{ height: '100%', width: '100%' }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0122,
            }}
        >
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor='black'
            />
            <Marker 
                coordinate={origin}
                title='Origin'
            />
            <Marker 
                coordinate={destination}
                title='Destination'
            />
        </MapView>
    )
}

export default RouteMap