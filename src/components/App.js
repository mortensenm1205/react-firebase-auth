import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './Navigation'
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import * as routes from '../constants/routes';
import { firebase } from '../firebase/index';

class App extends Component {

  state = {
    authUser: null
  }

  componentDidMount() {
    //here we are testing to see if user is logged
    //in or not
    //SignOutButton will turn this true or false
    //This is saying anytime any change happens to
    //auth obj then run this helper function
    firebase.auth.onAuthStateChanged(user => {
      if(user) {
        this.setState(() => ({ authUser: user }))
      } else {
        this.setState(() => ({ authUser: null }));
      }
    });
  }


  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser}/>
          <hr />

          <Route
            exact path={routes.LANDING}
            component={() => <LandingPage />}
          />
          <Route
            exact path={routes.SIGN_UP}
            component={() => <SignUpPage />}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={() => <SignInPage />}
          />
          <Route
            exact path={routes.PASSWORD_FORGET}
            component={() => <PasswordForgetPage />}
          />
          <Route
            exact path={routes.HOME}
            component={() => <HomePage />}
          />
          <Route
            exact path={routes.ACCOUNT}
            component={() => <AccountPage />}
          />
        </div>
      </Router>
    )
  }
}

export default App;
