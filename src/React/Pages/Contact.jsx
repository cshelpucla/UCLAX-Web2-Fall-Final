import React from 'react';
import Template from 'React/Shared/Template';
import styled from 'styled-components'
import UniversalForm from 'React/Shared/UniversalForm/UniversalForm'


const Contact = () => {
    // functional component logic

    const defaultData = [
        { id: 'email', value: '', required: true, label: 'Email', type: 'text', },
        { id: 'message', value: '', required: true, label: 'Message', type: 'text', }
    ];

    const handleOnSubmit = (apiResponse) => {
        console.log('Login Form', apiResponse);
        if (!apiResponse.errors) {
            const isLoggedIn = true;
            const profile = apiResponse.profile;
            //dispatch(UserActions.userAuthUpdate(isLoggedIn, profile))
        }
    }

    return (
        <ContactStyled className='Contact'>
            <Template title='Contact'>
            <UniversalForm
                formData={ defaultData }
                submitText='Email Us'
                apiEndpoint='/email/send'
                onSubmit={ handleOnSubmit }
            />             
        </Template>
        </ContactStyled>
    )
}

export default Contact;


const ContactStyled = styled.div`
 
`