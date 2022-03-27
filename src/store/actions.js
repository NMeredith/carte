import * as FileSystem from 'expo-file-system';
import { KEYS } from '../../env';
import { addPlacetoSql, deletePlaceFromSql, getPlacesFromSql } from '../helper/db';
import Place from '../model/Place';
import { ADD_PLACE_ACTION, DELETE_PLACE_ACTION, LOAD_PLACES } from './constants';

export const retrievePlaces = () => {
    return async dispatch => {
        const elements = await getPlacesFromSql();
        const result = elements?.rows?._array ?? [];
        dispatch({
            type: LOAD_PLACES,
            data: result.map(e => new Place(e.id, e?.title, e?.lat, e?.lng, e?.address))
        })
    }
}

export const remove = (id) => {
    return async dispatch => {
        const result = await deletePlaceFromSql(id);
        dispatch({
            type: DELETE_PLACE_ACTION,
            id
        });
    }
}

export const addPlace = ({name, lat, lng}) => {
    return async dispatch => {
        const addressResult = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${KEYS.maps}`);
        if (!addressResult.ok) {
            console.debug(addressResult);
            throw 'Failed to retrieve the address';
        }
        const addressJson = await addressResult.json();
        let address = '';
        try {
            address = addressJson.results[0].formatted_address;
        }
        catch(e) {
            console.debug(e);
            throw 'Failed to retrieve the address'; 
        }
        const result = await addPlacetoSql(name, newPath, lat, lng, address);
        dispatch({
            type: ADD_PLACE_ACTION,
            place: new Place(result?.insertId, name, newPath, lat, lng, address)
        });
    }
}