import React, {useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import {useDispatch, useSelect, useSelector} from 'react-redux';
import styled from 'styled-components';
import _ from 'lodash';


/* Scriptt */
import * as AuctionActions from 'Redux/auction/actions'
import * as UserActions from 'Redux/user/actions'

/* Components ---------------------------*/
import Header from './Shared/Header.jsx';
import Nav from './Shared/Nav.jsx';
import Content from './Shared/Content.jsx';
import Footer from './Shared/Footer.jsx';

/* Data ------------------------------- */
// import auction from '../common/static-data/auction.js';

const Main = () => {
    //console.log('Main', auction.id);
    const dispatch = useDispatch();

    const { auction    } = useSelector((state) => state)

    useEffect(() => {
        dispatch (AuctionActions.loadAuctions())
        dispatch (UserActions.loadUser())
    }, [dispatch]);

    if (_.isEmpty(auction.current)) {return 'Preloading' }   

    return (
        <MainStyled className='Main'>
            <BrowserRouter>
                <Header />
                <Nav />
                <Content />
                <Footer />
            </BrowserRouter>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.div `
    background-color: white;
    max-width: 1200px;
    width: 100%;
    margin: auo;
    box-shadow: 0px 0px 10px rgba(0,0,0,.2);
`;