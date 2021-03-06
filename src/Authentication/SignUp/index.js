import React, { useState } from 'react';
import Ricky from '../../images/FuckU.jpg';
import './signin.css';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
const SignUp = () => {
  const [signUp, setsignUp] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isValid: false,
  });
  const [passwordError, setPasswordError] = useState('');
  const checkValidity = () => {
    let passwordError = '';
    if (signUp.password !== signUp.confirmPassword) {
      passwordError = 'Passwords do not match';
    }
    if (passwordError) {
      setPasswordError(passwordError);
      return false;
    }
    return true;
  };
  function handleChange(e) {
    setsignUp({
      ...signUp,
      [e.target.name]: e.target.value,
      isValid: validity(),
    });
    // console.log(signUp);
  }
  const validity = () => {
    let valid = true;

    valid = signUp.displayName.trim() !== '' && valid;
    valid = signUp.email.trim() !== '' && valid;
    valid = signUp.password.trim() !== '' && valid;
    valid = signUp.confirmPassword.trim() !== '' && valid;
    return valid;
  };
  const { displayName } = signUp;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const realValid = checkValidity();
    if (!realValid) return;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        signUp.email,
        signUp.password
      );
      console.log(user);
      await createUserProfileDocument(user, {
        displayName,
      });
      setsignUp({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        isValid: false,
      });
    } catch (error) {
      console.log('What is this?', error);
    }
  };
  return (
    <div className="lg:flex block pt-6 bg-white shadow-lg lg:w-screen  max-w-3xl m-auto text-black auth-form ">
      <div className="lg:flex-initial text-center border rounded-full border-red-200">
        <img
          src={Ricky}
          alt="Ricky"
          className="h-64 rounded-full transform -translate-x-6"
        />{' '}
      </div>
      <div className="lg:flex-initial lg:w-9/12 h-auto">
        <form
          className="  lg:text-left text-center p-3"
          onSubmit={handleSubmit}
        >
          <h1 className="lg:mt-3 -mt-2 lg:text-3xl text-xl font-bold text-gray-600">
            Welcome, Create your account
          </h1>
          <span className="text-gray-500 text-xl">Enter your details</span>
          <label className="block mt-2 mb-2 mr-2 text-gray-700 p-3">
            Display name
          </label>
          <input
            type="text"
            placeholder="Display name"
            name="displayName"
            value={signUp.displayName}
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-3/4 appearance-none leading-normal ml-8 lg:ml-0"
            onChange={handleChange}
          />

          <label className="block mt-2 mb-2 mr-2 text-gray-700 p-3">
            Email
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-3/4 appearance-none leading-normal ml-8 lg:ml-0"
            type="email"
            name="email"
            value={signUp.email}
            placeholder="jane@example.com"
            onChange={handleChange}
          />
          <label className="block mt-2 mb-2 mr-2 text-gray-700 p-3">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={signUp.password}
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-3/4 appearance-none leading-normal ml-8 lg:ml-0"
            onChange={handleChange}
          />
          <label className="block mt-2 mb-2 mr-2 text-gray-700 p-3">
            Confirm password
          </label>
          <span className="text-red-800">{passwordError}</span>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={signUp.confirmPassword}
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-3/4 appearance-none leading-normal ml-8 lg:ml-0"
            onChange={handleChange}
          />
          <div className="mt-3 text-center">
            <button
              className="text-black p-2 border rounded-lg m-4 w-32 btn outline-none"
              disabled={!signUp.isValid}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
