import React from 'react';
import styled from 'styled-components'

/* Redux  -- */
import { useSelector } from 'react-redux';
import Bids from './Bids/Bids'

const BidManager = () => {

    const { bidManager: {current: {bids}} } = useSelector ((state) => state );
    
    // functional component logic
    return (
        <BidManagerStyled classname='BidManager'>
            BidManager {
               (bids && bids.length ) > 0 ? <Bids bids={bids}/> : 'Currently you have no lots'
            }
        </BidManagerStyled>
    )
}

export default BidManager;

const BidManagerStyled = styled.div`
    .BidManager-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`