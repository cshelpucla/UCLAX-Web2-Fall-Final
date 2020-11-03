
import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const AuctionNav = () => {
    // functional component logic
    return (
        <AuctionNavStyled className='Nav'>
            <NavLink to='/auction/bids'>Bids</NavLink>
            <NavLink to='/auction' exact>Lots</NavLink>            
        </AuctionNavStyled>
    )
}

export default AuctionNav;

const AuctionNavStyled = styled.nav`
    a {
        display: inline-block;
        width: 150px;
        line-height: 30px;

        background-color: #eeeeee;
        border-bottom: solid 3px red;
        color: #3a3a3a;

        border-radius: 5px 5px 0px 0px;
        text-decoration: none;
        font-size: 16px;
        
        &:hover {
            background-color:black
        }

        &.active {
            border-bottom: solid 3px purple
        }
    }
`