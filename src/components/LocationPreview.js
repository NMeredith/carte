import React from "react";
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { KEYS } from '../../env';

const LocationPreview = ({children, style, location, onPress}) => {
    const url = `https://maps.googleapis.com/maps/api/staticmap?center=${
        location?.latitude
    },${
        location?.longitude
    }&zoom=12&size=240x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C${
        location?.latitude
    },${
        location?.longitude
    }&key=${KEYS.maps}`;

    return (
        <TouchableOpacity style={{...styles.container, style}} onPress={onPress}>
            {location ?
                <Image source={{uri: url}} style={styles.image}/>
            :
                children
            }           
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10
    },
    image: {
        height: 200,
        width: '100%'
    }
})

export default LocationPreview;