import React from 'react';

import { Link } from 'react-router-dom';
import './SignUpPage.css';
import Vector from './images/Vector.svg';

import 'bootstrap/dist/css/bootstrap.css';

// A function-based React component for the Sign Up form
export function SignUpPage() {
  // Use the useState hook to store the form data in state
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');

  // A function that handles the form submission event
  function handleSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // TODO: Validate the form data and submit it to your server

    // Clear the form after submission
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>
          <Link to="/Form" className="top-left-arrow">
            <img src={Vector} alt="arrow" />
          </Link>
          <h2> Sign Up </h2>
        </span>
        <div className="m-5">
          <div className="form-group border-bottom mb-4">
            <input
              value={name}
              type="text"
              className="form-control  "
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="form-group border-bottom mb-4">
            <input
              value={email}
              type="email"
              className="form-control  "
              placeholder="Email address"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group border-bottom mb-4">
            <input
              value={phone}
              type="text"
              className="form-control  "
              placeholder="Phone Number"
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="form-group border-bottom">
            <input
              value={password}
              className="form-control"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
      </form>
      <button
        type="Sign Up"
        className="btn btn border  rounded w-100 mt-3 mb-3"
      >
        Sign Up
      </button>
    </div>
  );
}
