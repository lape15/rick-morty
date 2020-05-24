import React, { useState } from 'react';
import Ricky from '../../images/running.png';
import '../SignUp/signin.css';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { withRouter, Redirect } from 'react-router-dom';
const Login = (props) => {
  // console.log(props);
  const [login, setLogin] = useState({
    email: '',
    password: '',
    isValid: false,
  });
  const [authError, setAuthError] = useState(false);
  let userAuthDetails = false;
  function handleChange(e) {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
      isValid: validity(),
    });
    console.log(login);
  }
  const validity = () => {
    let valid = true;

    valid = login.email.trim() !== '' && valid;
    valid = login.password.trim() !== '' && valid;

    return valid;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = login;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      return <Redirect to="/characters" />;
      // setLogin({
      //   email: '',
      //   password: '',
      // });
    } catch (error) {
      console.error(error.code, error);
      if (!error.a) {
        setAuthError(true);
      }
    }
  };
  // console.log(authError);
  return (
    <div className="lg:flex block pt-6 bg-white shadow-lg lg:w-screen  max-w-3xl m-auto text-black ">
      <div className="lg:flex-initial text-center">
        <img src={Ricky} alt="Ricky" className="h-64" />{' '}
      </div>
      <div className="lg:flex-initial lg:w-9/12 h-auto">
        <form
          className="  lg:text-left text-center p-3"
          onSubmit={handleSubmit}
        >
          <h1 className="lg:mt-3 -mt-2 lg:text-3xl text-xl font-bold text-gray-600">
            Login
          </h1>

          {authError ? (
            <div className="text-red-400 text-center lg:text-left text-3xl">
              User is not authorized
            </div>
          ) : null}
          <span className="text-gray-500 text-xl">Enter your details</span>

          <label className="block mt-2 mb-2 mr-2 text-gray-700 p-3">
            Email
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-3/4 appearance-none leading-normal ml-8 lg:ml-0"
            type="email"
            name="email"
            value={login.email}
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
            value={login.password}
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-3/4 appearance-none leading-normal ml-8 lg:ml-0"
            onChange={handleChange}
          />

          <div className="mt-3">
            <button
              className="text-black p-2 border rounded-lg m-4 w-auto btn outline-none"
              onClick={signInWithGoogle}
              type="button"
            >
              Signin with Google
            </button>
            <button
              className="text-black p-2 border rounded-lg m-4 w-32 btn outline-none"
              disabled={!login.isValid}
            >
              Signin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default withRouter(Login);
