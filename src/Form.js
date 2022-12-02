import React, { useState } from 'react';
import './Form.css';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function SignUp() {
    const navigate = useNavigate();

    navigate('/SignUpPage');
  }

  function SubmitButton() {
    let validEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    if (validEmail.test(email) && password) {
      return (
        <div className="buttons">
          <a
            href="./SignUpPage"
            type="Sign Up"
            className="btn btn border  rounded w-100 mt-3 mb-3"
            onClick={SignUp}
          >
            Sign Up
          </a>
          <button type="submit" className="btn btn-primary  w-100 ">
            Log In
          </button>
        </div>
      );
    } else {
      return (
        <div className="buttons">
          <button
            href="./SignUpPage"
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

  return (
    <div>
      <form>
        <div className="form-group border-bottom mb-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control  "
            placeholder="Email address"
          />
        </div>
        <div className="form-group border-bottom">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Password"
          />
        </div>
        <SubmitButton />
      </form>
      <div className="password-reset mt-5">
        {' '}
        Forgot password? <a href="./SignUpPage.js">Reset here</a>
      </div>
    </div>
  );
}
