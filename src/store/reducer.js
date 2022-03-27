import { ADD_PLACE_ACTION, DELETE_PLACE_ACTION, LOAD_PLACES } from './constants';

const defaultState = {
    places: []
};


const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case LOAD_PLACES:
            return {...state, places: action.data};

        case ADD_PLACE_ACTION:
            return {...state, places: [...state.places, action.place]};

        case DELETE_PLACE_ACTION:
            return {...state, places: state.places.filter(e => e.id !== action.id)};

        default:
            return state;
    }
};

export default reducer;