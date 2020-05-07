

import { combineReducers } from 'redux';
import landingReducer from './landingReducer';

const rootReducer = combineReducers(
    {
        landing: landingReducer
    }
)

export default rootReducer;


