import React, { useContext } from 'react';
import styled from 'styled-components'

import Context from '../context/index.js'
import LabelInput from './LabelInput.jsx'


const LabelInputs = () => {
    // functional component logic

    const { state } = useContext(Context);

    const {
        formData
    } = state;

    return (
        <LabelInputsStyled className='LabelInputs'> {
            formData.map((formField, idx) => {
                return <LabelInput key ={idx} formField={formField}/>
            })
        }    
        </LabelInputsStyled>
    )
}

export default LabelInputs;

const LabelInputsStyled = styled.div`
`