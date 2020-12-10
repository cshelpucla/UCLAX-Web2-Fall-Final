import React from 'react';
import styled from 'styled-components'
import Template from '../../Shared/Template'
import SurveyBuilder from './SurveyBuilder'

const Creator = () => {
    // functional component logic

    return (
        <Template title='Creator' aside={true}>
            <BuilderStyled>
                <SurveyBuilder/>
            </BuilderStyled>
        </Template>
    )
}

export default Creator;

const BuilderStyled = styled.div`
    display: flex;
    flex: 1 0 90%;
    flex-direction: column;
`
const LotsStyled = styled.div`
    .lots-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;