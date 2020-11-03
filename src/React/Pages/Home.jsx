import React from 'react';
import styled from 'styled-components'
import Template from 'React/Shared/Template.jsx'

const Home = () => {
    // functional component logic
    return (
        <HomeStyled>
            <Template title='Home' aside={false}>
            Home Content
            </Template>
        </HomeStyled>
    )
}

export default Home;


const HomeStyled = styled.div`
 
`