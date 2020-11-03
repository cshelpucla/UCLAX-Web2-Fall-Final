import React from 'react';
import styled from 'styled-components'
import {useDispatch} from 'react-dom'

import  {addLotToBids } from 'Redux/bidManager/actions'

const Bid = ({bid}) => {

    const dispatch = useDispatch();

    const handleRemoveLot = (Bid) => {
        console.log("test")
        dispatch(addLotToBids(Bid))
    }

    // functional component logic
    return (
        <BidStyled className='Bid'>
            <div>{'$(bid.lot.number)'}: ${bid.lot.title}</div>

            <button  type='button'>
                onclick={handleRemoveLot}
            </button>            

        </BidStyled>
    )
}

export default Bid;

const BidStyled = styled.div`
    flex: 0 0 200px;
    margin: 10px;
    border: solid 1px #eee;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 7px rgba(0,0,0,.05);
    }
`