import { NavLink } from 'react-router-dom';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperation } from '../redux/auth';


export default function LoginPage() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
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

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperation.logIn({ email: email, password: password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h1 className='title-login'>Login page</h1>

            <form
                className='login_form'
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                <label >
                    Email
                    <input
                        className='login_input'
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>

                <label >
                    Password
                    <input
                        className='login_input'
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>

                <button className='login-bth' type="submit">Войти</button>
            </form>

            {/*тестові кнопки  */}
      
          <ul>
              <li>
                  <NavLink to="/tests-practice">QA technical training</NavLink>
              </li>
              <li>
                  <NavLink to="/tests-theory">Testing theory</NavLink>
              </li>
          </ul>
      
        </div>
    );

}

