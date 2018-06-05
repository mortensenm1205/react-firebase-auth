import React from 'react';
import { auth } from '../firebase/index';

const SignOutButton = () => {
  return (
    <button onClick={auth.signOut}>
      Sign Out
    </button>
  )
}

export default SignOutButton;
