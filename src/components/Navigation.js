import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const Navigation = ({ authUser }) => {
  return (
    <div>
      {
        //Here we allow the Nav component
        //to decide weather or not to display
        //certain nav items based on authUser
        authUser ?
        <NavigationAuth /> :
        <NavigationNonAuth />
      }
    </div>
  )
};

const NavigationAuth = () => {
  return (
    <ul>
      <li><Link to={routes.LANDING}>Landing</Link></li>
      <li><Link to={routes.HOME}>Home</Link></li>
      <li><Link to={routes.ACCOUNT}>Account</Link></li>
    </ul>
  )
};

const NavigationNonAuth = () => {
  return (
    <ul>
      <li><Link to={routes.LANDING}>Landing</Link></li>
      <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
    </ul>
  )
};

export default Navigation;
