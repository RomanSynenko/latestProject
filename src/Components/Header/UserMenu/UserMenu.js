import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, authOperation } from '../../../redux/auth';

import './UserMenuStyle.scss'

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelector.getUserName);
    const LogOut = useCallback(
        () => {
            dispatch(authOperation.logOut())
        },
        [dispatch],
    );
    return (
        <div className="logout-container">
            <span className='welcone-text'>Welcome {name} </span>
            <button className="logout-button" type="button" onClick={LogOut}>
                Log out
            </button>
        </div>
    );
};

export default UserMenu;