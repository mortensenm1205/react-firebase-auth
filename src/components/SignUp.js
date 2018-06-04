import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase/index';
import * as routes from '../constants/routes';

const SignUpPage = ({ history }) => {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignUpForm history={history}/>
    </div>
  )
}

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: ''
}

class SignUpForm extends Component {

  state = {...INITIAL_STATE}

  handleSubmit = e => {
    //something i just realized, we wanna set the variable not just for convience
    //but also for binding, this way we don't get an error when using history instead
    //of this.props.history within the promise of firebase auth method
    const { history } = this.props
    e.preventDefault();
    auth.doCreateUserWithEmailAndPassword(this.state.email, this.state.passwordOne).then(authUser => {
      //we're kinda doing the same thing with this setState
      //usually we just do ({}) but since we're in a promise
      //we need to bind it to the relevant obj sooo thats why
      //use a annyomous arrow func inplace of ({})
      this.setState(() => ( {...INITIAL_STATE} ));
      //this is where the redirect is happening. Pushing any route into
      //this obj will do a redirect. I think this is coming from React Router
      history.push(routes.HOME)
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    const isInvalid = this.state.passwordOne !== this.state.passwordTwo ||
    this.state.passwordOne === '' ||
    this.state.email === '' ||
    this.state.username === '';

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
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
            name="passwordOne"
            value={this.state.passwordOne}
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="passwordTwo"
            value={this.state.passwordTwo}
            onChange={this.handleChange}
          />
          <button disabled={isInvalid}>Sign Up</button>
        </form>
        {this.state.error && <p>{this.state.error.message}</p>}
      </div>
    )
  }
}

const SignUpLink = () => {
  return (
    <p>
      Dont have an account?
      {' '}
      <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>
  )
}

//this withRouter is what is giving us access to the history obj
//through props
export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink
}
