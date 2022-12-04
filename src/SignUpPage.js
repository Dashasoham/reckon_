import React from 'react';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import './SignUpPage.css';
import Vector from './images/Vector.svg';
import './SignUpPage.css';

import 'bootstrap/dist/css/bootstrap.css';

export function SignUpPage() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const history = useHistory();

  function Save() {
    history.push('/AccountValidation');
  }

  function SubmitButton() {
    let validEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    if (validEmail.test(email) && password && name && phone && rememberMe) {
      return (
        <div className="buttons">
          <button
            type="button"
            className="btn  border  rounded w-100 mt-3 mb-3"
            onClick={Save}
          >
            Save and Continue
          </button>
        </div>
      );
    } else {
      return (
        <div className="buttons">
          <button
            type="button"
            disabled
            className="btn  border  rounded w-100 mt-3 mb-3 "
          >
            Save and Continue
          </button>
        </div>
      );
    }
  }

  return (
    <div>
      <span>
        <Link to="/Form" className="top-left-arrow">
          <img src={Vector} alt="arrow" />
        </Link>
        <h2> Sign Up </h2>
      </span>
      <form className="m-4">
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
          <footer>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                By checking this box, I agree to Reckon.ai Terms & Conditions
                and Privacy Policy
              </label>
            </div>
          </footer>{' '}
        </div>{' '}
        <SubmitButton />
      </form>
    </div>
  );
}
