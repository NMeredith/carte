import React, { useState } from 'react';
import PlacesInput from 'react-native-places-input';
import { KEYS } from '../../env';


export default function PlacesSearchBar(props) {

    const [place, setPlace] = useState();

    const onChange = (places) => {

        props.onChange(places)
    }

    return (
        <PlacesInput
            placeHolder={props.placeholder}
            googleApiKey={KEYS}
            onSelect={place => onChange(place.result)}
            language={"en-US"}
            stylesContainer={{
                position: 'relative',
                alignSelf: 'stretch',
                margin: 0,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                shadowOpacity: 0,
                borderColor: '#dedede',
                borderWidth: 1,
                marginBottom: 4
            }}
            stylesList={{
                borderColor: '#dedede',
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderBottomWidth: 1,
                left: -1,
                right: -1
            }}
        />
    );
}