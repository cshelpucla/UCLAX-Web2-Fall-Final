import React from 'react';
import styled from 'styled-components';

/* Redux ---------------------------*/
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/* Scripts */
import * as BidManagerActions from 'Redux/bidManager/actions.js'
import Button from 'React/Shared/UniversalForm/Controls/Button.jsx'

/* Components ---------------------------*/
import Bid from './Bid.jsx';
import BidManager from '../BidManager.jsx';


const Bids = ({ bids }) => {
    const dispatch = useDispatch();
    const history = useHistory()

    const handleSubmitBids = () => {
        dispatch(BidManagerActions.submitBids(handleRedirect))
    }

    const handleRedirect = () => {
        history.push('/auction/thanks')
    }

    return (
        <BidsStyled className='Bids'>
                {
                    bids.map((bid, idx) => {
                        return <Bid
                                    key={ idx }
                                    bid={ bid }                                    
                                />
                    })
                }
                <Button onClick= { handleSubmitBids } >Submit bids</Button>
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