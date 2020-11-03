import { ActionTypes } from './actionTypes';
import API from 'common/API';

// Action creators 

export const formDataUpdate = (formData) => {
    return {
        type: ActionTypes.UF_FORM_DATA_UPDATE,
        formData: formData,
    }

}

export const statusUpdate = (formStatus) => {
    return {
        type: ActionTypes.UF_STATUS_UPDATE,
        formStatus: formStatus,
    }

}

export const feedbackMessageUpdate = (feedbackMessage) => {
    return {
        type: ActionTypes.UF_FEEDBACK_MESSAGE_UPDATE,
        feedbackMessage: feedbackMessage,
    }

}


export const handleOnInputChange = (newFormField, formData) => {
    const newFormData = formData.map((field) => {
        return (field.id === newFormField.id) ? newFormField : field;
    });

    return formDataUpdate(newFormData)
}

export const handleOnSubmit = (state, dispatch) => {    
        const {formData, apiEndpoint, onSubmit} = state

        let errors = false
        //validate data
        formData.forEach((field) => {
                if (field.value.length < 1) {
                    errors = true
                    dispatch(feedbackMessageUpdate(`The ${field.id} is required`))
                }
            }
        )

        //if invalid
        if (errors) { 
            dispatch(statusUpdate('error') )
        }
        //all passes submit data 
        else {   
            API.post(apiEndpoint, formData).then ((apiResponse) => {
                console.log('UF Actions: apiResponse', apiResponse)
                onSubmit(apiResponse.data)
            });
            
            dispatch(feedbackMessageUpdate('Eureka, You passed our validations'))
            dispatch(statusUpdate('success')) 
        }         
}