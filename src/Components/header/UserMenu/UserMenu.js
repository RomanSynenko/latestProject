import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, authOperation } from '../../../redux/auth';

import logOut from '../../../img/sign-out.png'
import './UserMenuStyle.scss'

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelector.getUserName);
    const shortName = name.slice(0, 1)
    const LogOut = useCallback(
        () => {
            dispatch(authOperation.logOut())
        },
        [dispatch],
    );
    return (
        <div className="logout-container">
            <span className='short-name'>{shortName}</span>
            <span className='welcone-text'>{name}</span>
            <button className="logout-button" type="button" onClick={LogOut}>
                <img src={logOut} alt="logOut" />
            </button>
        </div>
    );
};

export default UserMenu;