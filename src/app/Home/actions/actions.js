import { getCountryListSuccess } from './actions-creator';
import Axios from 'axios';

export const getCountryList = () => {
    return async dispatch => {
        try {
            const response = await Axios.get("https://restcountries.eu/rest/v2/all");
            dispatch(getCountryListSuccess(response.data));
        }
        catch (error){
            console.log(error);
        }
    }
};