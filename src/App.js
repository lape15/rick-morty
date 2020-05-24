import React, { useState, useEffect } from 'react';
import './App.css';
import '../src/styles/app.css';
import Header from './Components/Header';
import Routes from './Routes';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import UserContextProvider from './context';
const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  let unSubscribeFromAuth = null;
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      // console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
      return () => {
        unSubscribeFromAuth();
        console.log('I am unsubscribing');
      };
    });
  }, []);

  return (
    <div className="App">
      <UserContextProvider>
        <Header user={currentUser} />
        <Routes />
      </UserContextProvider>
    </div>
  );
};

export default App;
