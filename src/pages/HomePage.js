import { useHistory } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperation } from '../redux/auth';
import { resetResult } from '../redux/tests/testsSlice';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.logIn({ email: email, password: password }));
    setEmail('');
    setPassword('');
  };

  const handleClickQa = () => {
    history.push({
      pathname: '/tests',
      state: {
        toGo: 'QA technical training',
      },
    });
  };

  const hadleClickTheory = () => {
    history.push({
      pathname: '/tests',
      state: {
        toGo: 'Testing theory',
      },
    });
  };

  return (
    <div>
      <h1 className="title-login">Login page</h1>

      <form className="login_form" onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input
            className="login_input"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
            className="login_input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className="login-bth" type="submit">
          Войти
        </button>
      </form>

      {/*тестові кнопки  */}

      <ul>
        <li>
          <button type="button" onClick={handleClickQa}>
            QA technical training
          </button>
        </li>
        <li>
          <button type="button" onClick={hadleClickTheory}>
            Testing theory
          </button>
        </li>
      </ul>
    </div>
  );
}
