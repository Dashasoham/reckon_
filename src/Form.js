import React, { useState } from 'react';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function SubmitButton() {
    let validEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;

    if (validEmail.test(email) && password) {
      return (
        <div className="buttons">
          <button
            type="Sign Up"
            className="btn btn border  rounded w-100 mt-3 mb-3"
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

  function enableLogIn() {}
  return (
    <div>
      <form>
        <div className="form-group border-bottom mb-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control  "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email address"
          />
        </div>
        <div className="form-group border-bottom">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onInput={enableLogIn}
          />
        </div>
        <SubmitButton />
      </form>
      <div className="password-reset mt-5">
        {' '}
        Forgot password? <a href="#">Reset here</a>
      </div>
    </div>
  );
}
