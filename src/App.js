import React from 'react'
// import logo from './logo.svg';
import './App.css'
import '../src/styles/app.css'

import Header from './Components/Header'
import Routes from './Routes'
const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  )
}

export default App
