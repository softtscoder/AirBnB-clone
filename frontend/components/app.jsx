import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { 
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util'; 
import Nav from './nav/nav';

const App = () => {
  return (
    <div className="app-container">
      <header>
        <Nav />
      </header>
      
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      </Switch>
    </div>
  );
}

export default App;