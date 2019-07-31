import actionTypes from '../constants/actions';

const initialState = {
    trackDetails : {}
}

export const trackDetailsReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case actionTypes.GET_TRACK_DETAILS_SUCCESS : 
            return {
                ...state,
                trackDetails : payload.data
            };
        default :
            return state;
    }
}