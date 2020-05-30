import React, { useState, useEffect, createContext, useReducer } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
export const UserContext = createContext();

// const INITIAL_STATE = {
//     user: null
// }

// const reducer = (state,action) => {
//     switch(action.type){
//         case 'SET_USER':
//             return {
//                 ...state,
//                 user :action.payload
//             }
//             default:
//       return state;
//     }
// }
// const setUser = user => ({
//     type:'SET_USER',
//     payload: user
// })

const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);
<<<<<<< HEAD
  //   const[state,dispatch] = useReducer(reducer,INITIAL_STATE)
  //   const {state}
=======
  const [isAuthenticated, setIsAuthenticated] = useState(false);
>>>>>>> 3fdf5202b626aba4c1a38d9a9b16ec173d173fbe

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

  localStorage.setItem('userProfile', JSON.stringify(user));
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
export default UserContextProvider;
