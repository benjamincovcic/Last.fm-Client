import actionTypes from '../constants/actions';

const initialState = {
    countryList : []
}

export const homeReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case actionTypes.GET_COUNTRY_LIST_SUCCESS : 
            return {
                ...state,
                countryList : payload.data
            };
        default :
            return state;
    }
}