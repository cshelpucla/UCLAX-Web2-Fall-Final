import { ActionTypes } from './actionTypes';
import API from 'common/API.js';

/*===================================
|| 
|| Action Creators
|| Returns an object that provides
||  1. action type
||  2. data to update in store.
|| 
===================================*/

export const currentUpdate = (current) => {
    return {
        type: ActionTypes.BM_CURRENT_UPDATE,
        current: current,
    }
}

export const pastUpdate = (past) => {
    return {
        type: ActionTypes.BM_PAST_UPDATE,
        past: past,
    }
}

/*===================================
|| 
|| Action Dispatchers
|| 
===================================*/
export const readSurvey = () => {
    return (dispatch, getState) => {
        API.get('/survey/getSurvey').then((apiResponse) => {
            console.log('apiResponse', apiResponse);            
            dispatch(currentUpdate(apiResponse.data.payload.survey));            
        });
    }
}

export const saveSurvey = (survey) => {
    return (dispatch, getState) => {
        const postData = {
            survey: survey,
        }
        
        // grab existing state
        const { bidManager: { current: currentBidSubmission } } = getState();
        if (!currentBidSubmission.bids) {
            API.post('/bidSubmission/addSurvey', postData).then((apiResponse) => {
                console.log(apiResponse.data.payload.bidSubmission)
                dispatch(currentUpdate(apiResponse.data.payload.survey));
            });
        } else {
            const alreadyExists = currentBidSubmission.bids && currentBidSubmission.bids.find((currBid) => {
                return (currBid.lot.id === lot.id);
            });
            if (!alreadyExists) {
                API.post('/bidSubmission/updateSurvey', postData).then((apiResponse) => {
                    dispatch(currentUpdate(apiResponse.data.payload.bidSubmission));
                });
            }
        }
    }
}

