import React from 'react'
import { Image } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import carsData from '../../assets/data/cars'

const HomeMap = (props) => {

    const getImage = (type) => {
        if(type === 'UberX') return require('../../assets/images/top-UberX.png')
        
        if(type  === 'Comfort') return require('../../assets/images/top-Comfort.png')
        
        return require('../../assets/images/top-UberXL.png')  
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
            showsUserLocation
        >
            {
                carsData.map(item => (
                    <Marker 
                        key={item.id}
                        coordinate={{ latitude: item.latitude , longitude: item.longitude }}
                    >   
                        <Image 
                            style={{ 
                                width: 50, 
                                height: 50, 
                                resizeMode: 'contain',
                                transform: [{
                                    rotate: `${item.heading}deg`
                                }]
                            }}
                            source={getImage(item.type) } 
                        />
                    </Marker>
                ))
            }
        </MapView>
    )
}

export default HomeMap