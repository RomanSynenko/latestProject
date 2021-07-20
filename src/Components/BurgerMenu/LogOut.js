import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperation, authSelector } from '../../redux/auth';

import { ReactComponent as SignOut } from '../../img/sign-out.svg'

const LogOut = () => {
    const dispatch = useDispatch();
    const LogOut = useCallback(
        () => {
            dispatch(authOperation.logOut())
        },
        [dispatch],
    );
    return (

        <button className="logout-button_mobile" type="button" onClick={LogOut}>
            <SignOut />
        </button>

    );
};

export default LogOut;