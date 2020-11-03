import { ActionTypes } from './actionTypes';

const reducer = (state={}, action) => {
    switch (action.type) {
        case ActionTypes.UF_FORM_DATA_UPDATE: {
            return {
                ...state, 
                formData: action.formData,
            }
        }
        case ActionTypes.UF_STATUS_UPDATE: {
            return {
                ...state, 
                formStatus: action.formStatus,
            }
        }
        case ActionTypes.UF_FEEDBACK_MESSAGE_UPDATE: {
            return {
                ...state, 
                feedbackMessage: action.feedbackMessage,
            }
        }
        default:
            return state;
    }
}

export default reducer;