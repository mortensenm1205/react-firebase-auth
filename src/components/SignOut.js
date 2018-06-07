import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../firebase/index';
import * as routes from '../constants/routes';

class SignOutButton extends Component {

  handleClick = () => {
    //I wanted to redirect the user to the
    //landing page once they hit signout
    const { history } = this.props
    auth.doSignOut().then(() => {
      history.push(routes.LANDING);
    })
  }

  render() {
      return (
        <button onClick={this.handleClick}>
          Sign Out
        </button>
      )
  }
}

export default withRouter(SignOutButton);
