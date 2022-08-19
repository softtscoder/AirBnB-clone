import React, { StrictMode } from 'react';
import GreetingContainer from './greeting/greeting_container';
import { 
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

// import SignUpFormContainer from './session_form/signup_form_container';
// import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util'; 
import ModalContainer from './modal/modal';
import Splash from './splash/splash';
import Nav from './nav/nav';
import Footer from './footer/footer';
import ListingShowContainer from './listing_show/listing_show_container';

const App = () => {
  return (
    <>
      <ModalContainer />
      <header className='nav-header-container'>
        <Nav />
      </header>
      <React.StrictMode>
      <Switch>
        {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
        <Route exact path="/listing/:id" component={ListingShowContainer} />
        <Route exact path="/" component={Splash} />
      </Switch>
      </React.StrictMode>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;