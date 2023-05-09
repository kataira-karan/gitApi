import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './assets/Home/Home'
import React from "react";
import LandingPage from './assets/LandingPage/LandingPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact   path="/">
          <LandingPage></LandingPage>
        </Route>
        <Route exact path="/:userName">
           <div className="App w-screen bg-gray-500 flex flex-col justify-center items-center">
        <Home></Home>
         </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
