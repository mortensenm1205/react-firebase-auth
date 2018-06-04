import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SignUpLink } from './SignUp';
import { auth } from '../firebase/index';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) => {
  return (
    <div>
      <h1>SignIn Page</h1>
      <SignInForm history={history} />
      <SignUpLink />
    </div>
  )
}

const INITIAL_STATE = {
  email: '',
  password: ''
}

class SignInForm extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    const { history } = this.props;
    e.preventDefault();
    auth.doSignInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
      this.setState(() => ({...INITIAL_STATE}))
      history.push(routes.HOME)
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const isInvalid = this.state.email === '' || this.state.password === '';
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        <button disabled={isInvalid}>Sign In</button>
        </form>
      </div>
    )
  }
}

export default withRouter(SignInPage);

export {
  SignInForm
}
