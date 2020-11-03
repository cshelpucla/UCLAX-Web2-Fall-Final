import React , {useEffect} from 'react';
import styled from 'styled-components'
import Button from '../../../Shared/UniversalForm/Controls/Button'
import keycode from 'keycode'

const Lightbox = ({children, 
                   isOpen, 
                   onClose, 
                   headerText}) => {
    // functional component logic
 
    const stopBubbling = (e) => {
        e.stopPropagation()
    }
    
    useEffect (() => {

        const handleKeyDown = (e) => {
            switch(keycode(e)) {
                case 'esc': 
                    e.stopPropagation();
                    onClose()
                    break;
                default: 
                    return false;
            }
        } 

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }

    }, [onClose]);

    //console.log('Login auction',auction)
    if (!isOpen) {return '';}

    return (

        <LightboxStyled className='Lighbox' onClick={onClose}>
               <div className='theLight' onClick={stopBubbling}>
                    <header>
                        <h2>{headerText}</h2>
                    </header>
                   <Button className="CloseLightBox" onClick={onClose}>X</Button>
                   <div className="content">
                        {children}
                   </div>
               </div>
        </LightboxStyled>
    )
}

export default Lightbox;

const LightboxStyled = styled.div`
    outline: solid 1px red;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background-color: rgb(0,0,0,.75);

    .theLight {
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%, -50%);
        background-color: #fff;

        width: 300;        

        header {
            background-color: teal;
            color: white;
            padding: 11px;

            h2 {
                margin: 0px;
                font-size: 15px;
            }
        }

        .CloseLightBox {
            position: absolute;
            right: 0px; 
            top: 0px;
            margin: 0px;
        }

        .content {
            padding: 10px;
            min-height: 100px;
        }
    }
`