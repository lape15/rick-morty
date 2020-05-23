import React, { useState, useEffect } from 'react';
import './App.css';
import '../src/styles/app.css';
import Header from './Components/Header';
import Routes from './Routes';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  let unSubscribeFromAuth = null;
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          // console.log(currentUser);
        });
      }
      // console.log(userAuth);
      setCurrentUser(userAuth);
    });
  }, [currentUser]);

  useEffect(() => {
    return () => {
      unSubscribeFromAuth();
    };
  }, []);
  return (
    <div className="App">
      <Header user={currentUser} />
      <Routes />
    </div>
  );
};

export default App;
