import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from './firebase_config';
import SignIn from './Components/SignIn/SignIn';
import ExSignIn from './Components/SignIn/ExSignIn';
import SignUp from './Components/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

initializeApp(firebaseConfig);



function App() {
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photoURL: ''
  });

  const auth = getAuth();
  const signInHandler = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photoURL: photoURL
        };

        setUser(signedInUser);

      }).catch(err => {
        console.error(err);
        console.log(err.message);
      })
  };

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        setUser({
          isSignedIn: false,
          name: '',
          email: '',
          photoURL: ''
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="App">
      {/* <SignIn user={user} signOutHandler={signOutHandler} signInHandler={signInHandler}></SignIn> */}


      <Router>
        <Switch>
          <Route path="/" exact>
            <SignIn user={user} signOutHandler={signOutHandler} signInHandler={signInHandler}></SignIn>
          </Route>
          <Route path="/signup" exact>
            <SignUp user={user} signOutHandler={signOutHandler} signInHandler={signInHandler}></SignUp>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
