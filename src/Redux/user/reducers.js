import auction from '../../common/static-data/auction'
import { ActionTypes } from '../user/actionTypes.js';
const defaultState = {
    bids: [],    
}

const userReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.USER_AUTH_UPDATE:
            return {
                ...state,
                isLoggedIn: auction.isLoggedIn,
                profile: action.profile
            }
        default: return state;

    }
}

export default userReducer;