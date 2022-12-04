import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import image from './images/hello.png';
import './Welcome.css';

export function Welcome() {
  const history = useHistory();

  function SignUp() {
    // Redirect to the SignUpPage page when the button is clicked
    history.push('/Form');
  }

  function SubmitButton() {
    return (
      <div className="buttons">
        <button
          type="Sign Up"
          className="btn btn border  rounded w-100 mt-3 mb-3"
          onClick={SignUp}
        >
          Confirm{' '}
        </button>
      </div>
    );
  }

  return (
    <div>
      <img src={image} alt="shopper" />
      <form className="m-4">
        <h2 className="welcomeText mb-4"> Welcome To The Future</h2>
        <p className="mb-5">
          All set! You’re now ready to join us in the world of smart shopping.
        </p>
        <div className="welcomeSubmitButton">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
