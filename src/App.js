import './App.css';
import { Form } from './Form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignUpPage } from './SignUpPage';

function App() {
  return (
    <div className="App">
      <div>
        {' '}
        <Router>
          <Switch>
            <Route exact path="/Form" component={Form} />
            <Route path="/" component={SignUpPage} />
          </Switch>
        </Router>
      </div>{' '}
    </div>
  );
}

export default App;
