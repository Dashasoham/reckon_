import React from 'react';
import { Link } from 'react-router-dom';
import Vector from './images/Vector.svg';
import './AccountValidation.css';
import { useHistory } from 'react-router-dom';

export function AccountValidation() {
  const [number1, setNumber1] = React.useState('');
  const [number2, setNumber2] = React.useState('');
  const [number3, setNumber3] = React.useState('');
  const [number4, setNumber4] = React.useState('');
  const [number5, setNumber5] = React.useState('');
  const [number6, setNumber6] = React.useState('');

  const input1Ref = React.useRef(null);
  const input2Ref = React.useRef(null);
  const input3Ref = React.useRef(null);
  const input4Ref = React.useRef(null);
  const input5Ref = React.useRef(null);
  const input6Ref = React.useRef(null);

  const history = useHistory();

  function Confirm() {
    history.push('/Welcome');
  }
  function SubmitButton() {
    if (number1 && number2 && number3 && number4 && number5 && number6) {
      return (
        <div className="buttons">
          <button
            type="button"
            className="btn btn border  rounded w-100 mt-3 mb-3"
            onClick={Confirm}
          >
            Confirm
          </button>
        </div>
      );
    } else {
      return (
        <div className="buttons">
          <button
            type="button"
            disabled
            className="btn btn border  rounded w-100 mt-3 mb-3"
          >
            Confirm
          </button>
        </div>
      );
    }
  }

  function handleKeyUp(event) {
    if (event.target.value.length === 1) {
      switch (event.target) {
        case input1Ref.current:
          input2Ref.current.focus();
          break;
        case input2Ref.current:
          input3Ref.current.focus();
          break;
        case input3Ref.current:
          input4Ref.current.focus();
          break;
        case input4Ref.current:
          input5Ref.current.focus();
          break;
        case input5Ref.current:
          input6Ref.current.focus();
          break;
        default:
          break;
      }
    }
  }
  return (
    <div>
      <span>
        <Link to="/SignUpPage" className="top-left-arrow">
          <img src={Vector} alt="arrow" />
        </Link>
        <h2> Account Validation </h2>
        <p>
          We’ve sent a verification code to your phone +351 919270761. The code
          is valid for 90s
        </p>
      </span>
      <form className="hiddenForm m-4">
        <div className="Validation">
          <input
            value={number1}
            ref={input1Ref}
            type="number"
            maxLength={1}
            onChange={(event) => setNumber1(event.target.value.substring(0, 1))}
            onKeyUp={handleKeyUp}
          />
          <input
            value={number2}
            ref={input2Ref}
            type="number"
            maxLength={1}
            onChange={(event) => setNumber2(event.target.value.substring(0, 1))}
            onKeyUp={handleKeyUp}
          />{' '}
          <input
            value={number3}
            ref={input3Ref}
            type="number"
            maxLength="1"
            onChange={(event) => setNumber3(event.target.value.substring(0, 1))}
            onKeyUp={handleKeyUp}
          />{' '}
          <input
            value={number4}
            ref={input4Ref}
            type="number"
            maxLength="1"
            onChange={(event) => setNumber4(event.target.value.substring(0, 1))}
            onKeyUp={handleKeyUp}
          />{' '}
          <input
            value={number5}
            ref={input5Ref}
            type="number"
            maxLength="1"
            onChange={(event) => setNumber5(event.target.value.substring(0, 1))}
            onKeyUp={handleKeyUp}
          />{' '}
          <input
            value={number6}
            ref={input6Ref}
            type="number"
            maxLength="1"
            onChange={(event) => setNumber6(event.target.value.substring(0, 1))}
            onKeyUp={handleKeyUp}
          />{' '}
        </div>
        <footer className="validationFooter">
          <SubmitButton />
        </footer>
      </form>
    </div>
  );
}
