import { getCountryListSucces } from './actions-creator';
import Axios from 'axios';

export const getCountryList = () => {
    return async dispatch => {
        try {
            const response = await Axios.get("https://restcountries.eu/rest/v2/all");
            console.log(response);
        }
        catch (error){
            console.log(error);
        }
    }
};