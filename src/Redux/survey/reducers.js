import { ActionTypes } from './actionTypes';

const defaultState = {
    current: {}
}

const surveyReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.BM_SURVEY_READ:
            return {
                ...state,
                current: action.current,
            }
        case ActionTypes.BM_SURVEY_UPDATE:
            return {
                ...state,
                current: action.current,
            }
        default:
            return state;
    }
}

export default surveyReducer;