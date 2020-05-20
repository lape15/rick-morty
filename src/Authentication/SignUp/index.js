import React from 'react'
import Ricky from '../../images/FuckU.jpg'
import './signin.css'
const SignUp = () => {
  return (
    <div className="pt-8 bg-white shadow-lg w-screen text-center max-w-3xl m-auto ">
      <img src={Ricky} alt="Ricky" className="h-64" />
      <form className="border border-solid border-red-400 block">
        <h1>Welcome, Create your account</h1>
        <span>Enter your details</span>
        <label className="text-black ">First name</label>
        <input type="text" value="" placeholder="Last name" />
        <label className="text-black">Last name</label>
        <input type="text" value="" placeholder="First name" />
      </form>
    </div>
  )
}
export default SignUp
