import actionTypes from '../constants/actions';

const initialState = {
    tracksList : []
}

export const topTracksReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case actionTypes.GET_TOP_TRACKS_SUCCESS : 
            return {
                ...state,
                tracksList : payload.data
            };
        default :
            return state;
    }
}