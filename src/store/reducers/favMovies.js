const initialState = { favMovieID: [] }

function favMovies(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'SAVE_MOVIE':
            nextState = {
                ...state,
                favMovieID: [...state.favMovieID, action.id]
            };
            return nextState || state
        case 'DELETE_MOVIE':
            nextState = {
                ...state,
                favMovieID: state.favMovieID.filter(id => id !== action.id)
            };
            return nextState || state
        default:
            return state
    }
}

export default favMovies;