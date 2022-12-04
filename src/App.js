import './App.css';
import { Form } from './Form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignUpPage } from './SignUpPage';
import { AccountValidation } from './AccountValidation';
import { Redirect } from 'react-router-dom';
import { Welcome } from './Welcome';
import React from 'react';

function App() {
  const [shouldRedirect, setShouldRedirect] = React.useState(false);
  function handleSaveClick() {
    setShouldRedirect(true);
  }
  return (
    <div className="App">
      <div>
        {' '}
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/form" />
            </Route>
            <Route exact path="/Form" component={Form} />
            <Route path="/SignUpPage" component={SignUpPage} />
            <Route path="/Welcome" component={Welcome} />

            <Route
              exact
              path="/"
              render={(props) => (
                <SignUpPage {...props} onSaveClick={handleSaveClick} />
              )}
            />
            {shouldRedirect && <Redirect to="/AccountValidation" />}

            <Route
              exact
              path="/AccountValidation"
              component={AccountValidation}
            />
          </Switch>
        </Router>
      </div>{' '}
    </div>
  );
}

export default App;
