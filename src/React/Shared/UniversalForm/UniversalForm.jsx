import React, {useReducer} from 'react';
import styled from 'styled-components'


/* Context */

import Context from './context/index.js'
import reducers from './context/reducers.js'
import Form from './Form.jsx'
import Feedback from './Feedback.jsx'
import LabelInputs from './LabelInputs/LabelInputs.jsx'
import Button from './Controls/Button.jsx'

const UniversalForm = ({
    formData=[],
    submitText='Submit',
    apiEndpoint,
    onSubmit,
}) => {

    const initialState = {
        formData: formData,
        formStatus: 'pending',
        feedbackMessage: 'no message',
        submitText: submitText,
        apiEndpoint: apiEndpoint,
        onSubmit: onSubmit
    }

    const [state, dispatch] = useReducer(reducers, initialState)

    return (
        <Context.Provider value={{state,dispatch}}>
                <Feedback/>
                <Form>
                    <LabelInputs />
                    <Button type='submit'>{state.submitText}</Button> 
                </Form>
        </Context.Provider>
    )
}

export default UniversalForm;

