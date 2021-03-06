import React, { useContext } from 'react';
import Text from '../images/text.png';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
import { UserContext } from '../context';
import app from '../firebase/firebase.utils';
const Header = (props) => {
  const user = useContext(UserContext);
  let profile = {};

  if (user) {
    profile = user;
    console.log(user);
  } else {
    console.log('What is this');
  }
  // console.log(profile);
  return (
    <header className="bg-transparent">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <div>
          <NavLink to={'/'}>
            <img src={Text} alt="text" className="w-40 h-auto" />
          </NavLink>
        </div>
        <div>
          <ul className="lg:flex lg:justify-between lg:items-center hidden">
            <li className="m-2 p-2 text-green-900 cursor-pointer">
              <NavLink to={'/'}>Home </NavLink>
            </li>
            <li className="m-2 p-2 text-green-900 cursor-pointer">
              <NavLink to={'/'}>About</NavLink>
            </li>
            {!user ? (
              <li className="m-2 p-2 text-green-900 cursor-pointer">
                <NavLink to={'/auth/signup'}>Register</NavLink>
              </li>
            ) : null}

            {user ? (
              <li
                className="m-2 p-2 text-green-900 cursor-pointer"
                onClick={() => {
                  auth.signOut();
                }}
              >
                SignOut
              </li>
            ) : (
              <li className="m-2 p-2 text-green-900 cursor-pointer">
                <NavLink to={'/auth'}>Login</NavLink>
              </li>
            )}
          </ul>
        </div>
        <NavLink
          className="lg:hidden m-2 p-2 text-green-900 cursor-pointer"
          to="/auth"
        >
          Login
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
