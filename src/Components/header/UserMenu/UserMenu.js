import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, authOperation } from '../../../redux/auth';

import { ReactComponent as SignOut } from '../../../img/sign-out.svg'
import './UserMenuStyle.scss'

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelector.getUserName).slice(0, 7)
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
                <SignOut />
            </button>
        </div>
    );
};

export default UserMenu;