import React from 'react';
import styled from 'styled-components';

/* Redux ---------------------------*/
import { useSelector } from 'react-redux';

/* Components ---------------------------*/
import Bid from './Bid.jsx';
const Bids = () => {
    const { auction } = useSelector((state) => state);
    return (
        <BidsStyled className='Bids'>
            <h2>Bids</h2>
            <div className="Bids-container">
                {
                    auction.Bids.map((lot, idx) => {
                        return <Bid
                                    key={ idx }
                                    lot={ lot }
                                    auctionID={ auction.id }
                                />
                    })
                }
            </div>
        </BidsStyled>
    );
}
export default Bids;
const BidsStyled = styled.div`
    .Bids-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;