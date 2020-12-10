import React from 'react';
import styled from 'styled-components'
import Template from '../../Shared/Template'
import SurveyComponent from './SurveyComponent'

const Builder = () => {
    // functional component logic

    return (
        <Template title='Builder' aside={true}>
            <BuilderStyled>
                <SurveyComponent/>
            </BuilderStyled>
        </Template>
    )
}

export default Builder;

const BuilderStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

`
const LotsStyled = styled.div`
    .lots-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;
