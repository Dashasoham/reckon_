import './App.css';
import Form from './Form';
import image from './images/shopper.png';

function App() {
  return (
    <div className="App">
      <div>
        <h2> 1, 2, 3 Ready To Go!</h2>
        <img src={image} alt="shopper" />

        <Form />
      </div>{' '}
    </div>
  );
}

export default App;
