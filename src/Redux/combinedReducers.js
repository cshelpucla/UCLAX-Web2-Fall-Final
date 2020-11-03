
import { combineReducers } from 'redux';

import auctionReducer from './auction/reducers'
import bidManagerReducer from './bidManager/reducers.js'
import userReducer from  './user/reducers.js'

const combinedReducers = combineReducers({
    auction: auctionReducer,
    bidManager: bidManagerReducer,
    user: userReducer
});

export default combinedReducers;