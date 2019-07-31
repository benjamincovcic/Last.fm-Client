import { invokeGetWebService } from '../../../api/api'
import { getTopTracksSuccess } from './actions-creator';
import { apisAreAvailable } from 'expo';
import Axios from 'axios';


export const getTopTracks = (countryName) => {
    return async dispatch => {
        try {
            
            const queryString = "/2.0/?method=geo.gettoptracks&country=+"+countryName+"&api_key="+"f0417e23bd6233fe2f932b40873910e7"+"&format=json"
            const response = await Axios.get("http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country="+countryName+"&api_key=f0417e23bd6233fe2f932b40873910e7&format=json");
            dispatch(getTopTracksSuccess(response.data)); 
        }
        catch (error){
            console.log(error);
        }
    }
}