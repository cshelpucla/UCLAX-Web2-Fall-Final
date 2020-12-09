import React from 'react';
import styled from 'styled-components'
import {Switch, Route} from 'react-router-dom'
//import React, { useState, useRef, useEffect } from 'react';

import Template from '../../Shared/Template.jsx'
import BidManager from './BidManager/BidManager.jsx'

import  { useSelector } from 'react-redux'

import Lots from './Lots/Lots.jsx'
import AuctionNav from './AuctionNav.jsx'
import BidThanks from './BidThanks.jsx'

const Auction = () => {
    // functional component logic

    const { user } = useSelector((state)=> state)

    return (
        <AuctionStyled classname = "">
            <Template title="Auction">
            {    user.isLoggedIn && <AuctionNav /> }
            <Switch>
                <Route path='/auction/bids' component={BidManager} />                    
                <Route  path='/auction' component={Lots} exact />
                <Route path='/auction/thanks' component={BidThanks} />                    
            </Switch>            
            </Template>
        </AuctionStyled>
    )
}

export default Auction;

const AuctionStyled = styled.div`
 
`