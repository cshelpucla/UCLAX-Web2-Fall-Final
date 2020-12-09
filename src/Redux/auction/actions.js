import { ActionTypes } from './actionTypes'
import API from 'common/API.js';
import auction from 'common/static-data/auction';

export const auctionCurrentSet = (auction) => {
    return {
        type: ActionTypes.BM_AUCTION_CURRENT_SET,
        current: auction,
    }
}


export const loadAuctions = () => {
    return (dispatch, getState) => {
        API.get('/auctions/current')
        .then((apiResponse) => {
            dispatch(auctionCurrentSet(apiResponse.data.payload.currentAuction))
        });
    }
}


