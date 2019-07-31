import { combineReducers } from 'redux';
import { homeReducer } from '../app/Home/reducers/home-reducer';
import { topTracksReducer } from '../app/TopTracks/reducers/top-tracks-reducer';
import { trackDetailsReducer } from '../app/TrackDetails/reducers/track-details-reducer';
//Combines all the reducer for the store and exports to it
const rootReducer = combineReducers({
    homeReducer,
    topTracksReducer,
    trackDetailsReducer
});

export default rootReducer;