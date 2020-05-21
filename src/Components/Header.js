import React from 'react'
import Text from '../images/text.png'
import { NavLink } from 'react-router-dom'
const Header = () => {
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
            <li className="m-2 p-2 text-green-900 cursor-pointer">
              <NavLink to={'/'}>Register</NavLink>
            </li>
            <li className="m-2 p-2 text-green-900 cursor-pointer">
              <NavLink to={'/signin'}>Signin</NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          className="lg:hidden m-2 p-2 text-green-900 cursor-pointer"
          to="/signin"
        >
          Signin
        </NavLink>
      </div>
    </header>
  )
}

export default Header
