import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import News from './components/News';

export default class App extends Component {
  
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<NavBar/>} />
        </Routes>
        <Routes>
          <Route exact path='/' element={<News pageSize={7} />} />
        </Routes>
      </Router>
    )
  }
}

