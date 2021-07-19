import { useHistory, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperation } from '../../redux/auth';
import { resetResult } from '../../redux/tests/testsSlice';

import { ReactComponent as Google } from '../../img/google.svg';
import './AuthStyle.scss';

export default function Auth() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        dispatch(resetResult());
    });

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;

            case 'password':
                setPassword(value);
                break;

            default:
                console.warn();
        }
    };

    const handleSubmitLogin = e => {
        e.preventDefault();
        dispatch(authOperation.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };
    const handleSubmitRegister = e => {
        e.preventDefault();
        dispatch(authOperation.register({ email, password }));
        setEmail('');
        setPassword('');
    };
    const onClickGoogle = () => {
        dispatch(authOperation.registerGoogle());
    }
    return (
        <div className="auth-components">
            <div className="login-info">
                <h1 className="title-login">Pro Test</h1>
                <p>We will help you find weak points
                    in knowledge so that you can strengthen it.
                    We will show you what is relevant to know for a <span className="engineer">QA Engineer</span> and
                    will try to make the learning process more diverse_
                </p>
            </div>
            <div className="login_form">
                <p className="login_form-choice">You can use your Google Account to authorize:</p>
                <button onClick={onClickGoogle} className='google-register'>
                    <Google />
                    <span className='google-register_text'>Google</span>
                </button>
                <form autoComplete="off">
                    <p className="login_form-input-text">Or login to our app using e-mail and password:</p>
                    <label>
                        <input
                            className="login_input"
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <input
                            className="login_input"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handleChange}
                        />
                    </label>
                    <div className="login-bth-block">
                        <button onClick={handleSubmitLogin} className="login-bth" type="submit">
                            SIGN IN
                        </button>
                        <button onClick={handleSubmitRegister} className="login-bth" type="submit">
                            SIGN UP
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}