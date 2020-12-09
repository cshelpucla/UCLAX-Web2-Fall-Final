import React, {useState} from 'react';
import styled from 'styled-components';
import AddRemoveLot  from './AddRemoveLot';
import Lightbox from '../../../Shared/UniversalForm/Controls/Lightbox'
import  { useSelector } from 'react-redux'

/* Scripts ---------------------------*/
const Lot = ({lot, auctionID}) => {

    //console.log("From lot ", lot)
    const [isOpen, isOpenUpdate] = useState(false)
    const { user } = useSelector((state)=> state)

    const handleOnClose = () => {
        //console.log('close lightbox')
        isOpenUpdate(false)
    }

    const handleOnOpen = () => {
        //console.log('open lightbox')
        isOpenUpdate(true)
    }

    return (
        <LotStyled className='Lot'>
            <img    src={ `/assets/img/auctions/${auctionID}/lots/small/${lot.images.small}`} 
                    alt={lot.title}
                    onClick={handleOnOpen}
            />
            <h3>{ `Lot: ${lot.number}: ${lot.title}` }</h3>
            {
                user.isLoggedIn && <AddRemoveLot lot={lot}/>
            }            
            <Lightbox isOpen={isOpen} 
                onClose={handleOnClose}
                headerText={`Lot# ${lot.number}: ${lot.title}`}>
                    <img    src={ `/assets/img/auctions/${auctionID}/lots/small/${lot.images.small}`} 
                        alt={lot.title}
                        onClick={handleOnOpen}
                    />
                    <h3>{ `Lot: ${lot.number}: ${lot.title}` }</h3>
                    <div className="artist"><b>Artist:</b> {lot.artist}</div>
                    <div className="medium"><b>Medium:</b> {lot.medium}</div>
                    {
                        user.isLoggedIn && <AddRemoveLot lot={lot}/>
                    }
            </Lightbox>        
        </LotStyled>
    );
}
export default Lot;

const LotStyled = styled.div`
    flex: 0 0 200px;
    margin: 10px;
    border: solid 1px #eee;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 7px rgba(0,0,0,.05);
    }

    .Lightbox {
        .AddRemoveLot {
            .Button {
                display: block;
                width: 100%;
                margin: 10px 0px 0px;
            }
        }
    }

`;