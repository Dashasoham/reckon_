import React from 'react';
import { useHistory } from 'react-router-dom';
import image from './images/hello.png';
import './Welcome.css';

export function Welcome() {
  const history = useHistory();

  function toHome() {
    history.push('/Form');
  }

  function SubmitButton() {
    return (
      <div className="buttons">
        <button
          type="button"
          className="btn btn border  rounded w-100 mt-3 mb-3"
          onClick={toHome}
        >
          Confirm
        </button>
      </div>
    );
  }

  return (
    <div className="finalPage">
      <img src={image} alt="hello" className="mb-5" />
      <h1 className="mt-5 mb-">Welcome to the future</h1>
      <p>
        All set! You’re now ready to join us in the world of smart shopping.
      </p>{' '}
      <SubmitButton />
    </div>
  );
}
