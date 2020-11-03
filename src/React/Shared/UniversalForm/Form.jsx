import React, {useContext} from 'react';
import styled from 'styled-components'

import Context from './context/index'
import * as UFActions from './context/actions'

const Form = ({children}) => {

    const {state, dispatch} = useContext(Context)
    
    const handleOnSubmit = (e) => {        
        e.preventDefault()
        UFActions.handleOnSubmit(state, dispatch)
    }

    return (
        <FormStyled onSubmit={ handleOnSubmit } className='Form'>
            {children}
        </FormStyled>
    )
}

export default Form;

const FormStyled = styled.form`
    max-width: 500px;   
    margin: 0px auto;
    background-color: #fcfcfc;
    padding: 20px;
    border: solid 1px #ccc;

`