import React from 'react';
import Essay from './Essay.jsx'
import styled from 'styled-components'

const Essays = ({essays}) => {
    // functional component logic
    return (
        <EssaysStyled>{
            essays.map((essay, idx) => {
                return <Essay key={idx} essay={essay}/>
            })
            }            
        </EssaysStyled>
    );
}

export default Essays;

const EssaysStyled = styled.div`
    border : solid 5px purple;
    padding : 20px;
    background-color : #bee;
`