import React, { useContext } from 'react';
import Text from '../images/text.png';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
import { UserContext } from '../context';
const Header = (props) => {
  const user = useContext(UserContext);
  // console.log(user);
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
            {!props.user ? (
              <li className="m-2 p-2 text-green-900 cursor-pointer">
                <NavLink to={'/auth/signup'}>Register</NavLink>
              </li>
            ) : null}

            {props.user ? (
              <li
                className="m-2 p-2 text-green-900 cursor-pointer"
                onClick={() => {
                  auth.signOut();
                }}
              >
                SignOut
              </li>
            ) : props.user === null ? (
              <li className="m-2 p-2 text-green-900 cursor-pointer">
                <NavLink to={'/auth'}>Login</NavLink>
              </li>
            ) : null}
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
