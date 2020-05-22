import React, { useState, useEffect } from 'react'
import './App.css'
import '../src/styles/app.css'
import Header from './Components/Header'
import Routes from './Routes'
import { auth } from './firebase/firebase.utils'
const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  let unSubscribeFromAuth = null
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user.displayName)
      console.log(user.displayName)
    })
  }, [currentUser])

  useEffect(() => {
    return () => {
      unSubscribeFromAuth()
    }
  }, [])
  return (
    <div className="App">
      <Header user={currentUser} />
      <Routes />
    </div>
  )
}

export default App
