import React, { useState, useEffect, createContext } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    var unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setUser(userAuth);
      }

      return () => {
        unSubscribeFromAuth();
        console.log('I am unsubscribing');
      };
    });
  }, []);
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
export default UserContextProvider;
