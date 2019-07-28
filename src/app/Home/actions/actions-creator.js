import actionTypes from '../constants/actions';

export const getCountryListSuccess = (data) => ({
    type : actionTypes.GET_COUNTRY_LIST_SUCCESS,
    data 
})