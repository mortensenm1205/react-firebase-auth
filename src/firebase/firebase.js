//Making a seperate fb dir so that any other functionality / components that need this only can access
//it through a folder. And from that folder that should only access one file that contains all of it
//thats why we have a index.js file

import firebase from 'firebase/app';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyDziRy7XTTAYoN5DYD8YKGczJeepPcxqyc",
  authDomain: "react-authentication-f0e91.firebaseapp.com",
  databaseURL: "https://react-authentication-f0e91.firebaseio.com",
  projectId: "react-authentication-f0e91",
  storageBucket: "",
  messagingSenderId: "945237714905"
};

if(!firebase.apps.legnth) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
}
