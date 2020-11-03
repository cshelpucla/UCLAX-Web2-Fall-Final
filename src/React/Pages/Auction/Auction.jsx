import React from 'react';
import styled from 'styled-components'
import {Switch, Route} from 'react-router-dom'

import Template from '../../Shared/Template.jsx'
import BidManager from './BidManager/BidManager.jsx'

import Lots from './Lots/Lots.jsx'
import AuctionNav from './AuctionNav.jsx'

const Auction = () => {
    // functional component logic

    

    return (
        <AuctionStyled classname = "">
            <Template title="Auction">
            <AuctionNav/>
            <Switch>
                <Route path='/auction/bids' component={BidManager} />                    
                <Route  path='/auction' component={Lots} exact />
            </Switch>            
            </Template>
        </AuctionStyled>
    )
}

export default Auction;

const AuctionStyled = styled.div`
 
`