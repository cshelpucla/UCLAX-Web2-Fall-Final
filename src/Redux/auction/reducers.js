import auction from '../../common/static-data/auction';
import { ActionTypes, AuctionTypes } from './actionTypes'

const defaultState = {
    current: {},
}

const auctionReducer = (state = auction, action) => {
    switch(action.type) {
        case ActionTypes.BM_AUCTION_CURRENT_SET:
            return {
                ...state,
                current: action.current,
            };
        default:
            return state;
    }
}

export default auctionReducer;