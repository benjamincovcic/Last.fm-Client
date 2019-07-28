import { combineReducers } from 'redux';
import { homeReducer } from '../app/Home/reducers/home-reducer';

//Combines all the reducer for the store and exports to it
const rootReducer = combineReducers({
    homeReducer
});

export default rootReducer;