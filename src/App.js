import React, { useState, useEffect } from 'react';
import './App.css';
import '../src/styles/app.css';
import Header from './Components/Header';
import Routes from './Routes';

import UserContextProvider from './context';

const App = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <Header />

        <Routes />
      </UserContextProvider>
    </div>
  );
};

export default App;
