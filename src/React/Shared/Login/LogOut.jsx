import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import styled from 'styled-components';

import Button from '../UniversalForm/Controls/Button'
import * as UserActions from 'Redux/user/actions.js'

const LogOut = () => {
    
    const dispatch = useDispatch()
    const {user } = useSelector((state) => state);

    const handleLogout = () => {
        console.log('You clicked me.')
        dispatch(UserActions.logOut())
    }

    return (
        <LogOutStyled className='LogOut'>
            <Button onClick={handleLogout}>
                log { user.profile.first } out
            </Button>            
        </LogOutStyled>
    );
}

export default LogOut;

const LogOutStyled = styled.div`
`;