
import { ActionTypes } from './actionTypes';

export const userAuthUpdate = (isLoggedIn, profile) => {
    return {
        type: ActionTypes.USER_AUTH_UPDATE,
        isLoggedIn: isLoggedIn,
        profile: profile
    }

}

