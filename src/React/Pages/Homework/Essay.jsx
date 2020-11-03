import React from 'react';
import styled from 'styled-components'

// const Essay = ({essay}) => {
const Essay = (props) => {
    // functional component logic
    const {
        essay
    } = props;

    const {
        title,
        question,
        AnswerComponent,
    } = essay;


    return (
        <EssayStyled>
            <h3>{title}</h3>
            <div className="question">{ question}</div>
            <AnswerComponent/>
        </EssayStyled>
    )
}

export default Essay;

const EssayStyled = styled.div`
    border : solid 2px red;
    padding : 20px;
    margin : 20px 0px;
    border-radius : 20px;
`