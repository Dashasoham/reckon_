import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import image from './images/shopper.png';
import './Form.css';

export function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function SignUp() {
    history.push('/SignUpPage');
  }

  function SubmitButton() {
    let validEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    if (validEmail.test(email) && password) {
      return (
        <div className="buttons">
          <button
            type="Sign Up"
            className="btn btn border  rounded w-100 mt-3 mb-3"
            onClick={SignUp}
          >
            Sign Up
          </button>
          <button type="submit" className="btn btn-primary  w-100 ">
            Log In
          </button>
        </div>
      );
    } else {
      return (
        <div className="buttons">
          <button
            type="Sign Up"
            className="btn btn border  rounded w-100 mt-3 mb-3"
            onClick={SignUp}
          >
            Sign Up
          </button>
          <button type="submit" disabled className="btn btn-primary  w-100 ">
            Log In
          </button>
        </div>
      );
    }
  }
  function togglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }
  return (
    <div>
      <h2 className="mainText"> 1, 2, 3 Ready To Go!</h2>
      <img src={image} alt="shopper" />
      <form className="m-4">
        <div className="form-group border-bottom mb-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            placeholder="Email address"
          />
        </div>
        <div
          className="form-group border-bottom"
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Password"
            type={isPasswordVisible ? 'text' : 'password'}
          />

          <button
            onClick={togglePasswordVisibility}
            type="button"
            className="password-visibility-toggle-btn"
          >
            {isPasswordVisible ? (
              <a
                href="https://www.flaticon.com/free-icons/eye"
                title="eye icons"
              >
                Eye icons created by Kiranshastry - Flaticon
              </a>
            ) : (
              <i className="fa fa-eye-slash" aria-hidden="true" />
            )}
          </button>
        </div>
        <SubmitButton />
      </form>
      <div className="password-reset mt-3 mb-5">
        {' '}
        Forgot password?{' '}
        <a href="/" target="_blank" className="link">
          <strong> Reset here</strong>
        </a>
      </div>
    </div>
  );
}
