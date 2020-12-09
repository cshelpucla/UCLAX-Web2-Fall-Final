import React from 'react';
import styled from 'styled-components'

/*Redux ---- */
import { useSelector } from 'react-redux'

const Aside = () => {
    // functional component logic
    
    //console.log ('auction id', auction.id)
    /*
    console.log ('Aside : auction', auction)

    const theAuction = (auction) ? auction : {
        id: 64,
        title: 'Any title - fallback'
    }
    */

    const { auction } = useSelector((state) => state )
    //console.log ('Aside : auction', auction)

    return (
        <AsideStyled className='Aside'>
            <img 
                src={`/assets/img/auctions/${auction.id}/auction.jpg`} 
                alt={ `${auction.title}` }                
            />      
            <h2>{auction.title}</h2>                  
        </AsideStyled>
    )
}

export default Aside;


const AsideStyled = styled.aside`
    img {
        max-width: 100%;
    }
`