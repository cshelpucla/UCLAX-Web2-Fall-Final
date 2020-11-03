import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Button  from 'React/Shared/UniversalForm/Controls/Button';

/* Scripts ---------------------------*/
import { addLotToBids, removeLotToBids } from 'Redux/bidManager/actions.js';

const AddRemoveLot = ({lot}) => {
    const dispatch = useDispatch();

    const { bidManager: {bids} } = useSelector ((state) => state)

    console.log('AddRemoveLot ', bids)

    const isInBids = bids.find((bid) => {return bid.lot.id === lot.id})

    console.log('AddRemoveLot in bids', isInBids)

    const handleOnClick = () => {
        console.log('clickity-click');
        dispatch(addLotToBids(lot));
    }
    
    const handleRemoveLot = () => {
        console.log('remove');
        dispatch(removeLotToBids(lot));
    }

    return (
        <AddRemoveLotStyled className='AddRemoveLot'>   {         
            (isInBids) ?            
            <Button onClick={ handleOnClick } > Add Lot </Button> :            
            <Button onClick={ handleRemoveLot } >  Remove Lot </Button> 
        }
        </AddRemoveLotStyled>
    );
}
export default AddRemoveLot;

const AddRemoveLotStyled = styled.div`
   
`;