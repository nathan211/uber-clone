import React from 'react'
import { View, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBCi40AGPI8oGHg_l-X8A-qh4dLrzfV5gw'

const RouteMap = (props) => {
    const { origin, destination  } = props

    const originLocation = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng
    }
    const destinationLocation  = {
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng,
    }

    console.log({
        originLocation,
        destinationLocation
    })

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
                origin={originLocation}
                destination={destinationLocation}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor='black'
            />
            <Marker 
                coordinate={originLocation}
                title='Origin'
            />
            <Marker 
                coordinate={destinationLocation}
                title='Destination'
            />
        </MapView>
    )
}

export default RouteMap