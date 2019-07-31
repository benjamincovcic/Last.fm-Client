import { getTrackDetailsSuccess } from './actions-creator';
import Axios from 'axios';

export const getTrackDetails = (artist, trackName) => {
    return async dispatch => {
        try {
            const response = await Axios.get("http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=f0417e23bd6233fe2f932b40873910e7&artist="+artist+"&track="+trackName+"&format=json");
            //console.log(response);
            dispatch(getTrackDetailsSuccess(response.data));
        }
        catch (error){
            console.log(error);
        }
    }
};