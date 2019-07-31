import actionTypes from '../constants/actions';

export const getTopTracksSuccess = (data) => ({
    type : actionTypes.GET_TOP_TRACKS_SUCCESS,
    data 
})