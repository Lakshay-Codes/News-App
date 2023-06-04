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
  pageSize=15;
  apiKey=process.env.REACT_APP_API_KEY;
  render() {
    
    return (
      <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<News key="general" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="general" />} />
          <Route exact path='/business' element={<News key="business" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="business" />} />
          <Route exact path='/entertainment' element={<News key="entertainment" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="entertainment" />} />
          <Route exact path='/health' element={<News key="health" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="health" />} />
          <Route exact path='/science' element={<News key="science" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="science" />} />
          <Route exact path='/sports' element={<News key="sports" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="sports" />} />
          <Route exact path='/technology' element={<News key="technology" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="technology" />} />
        </Routes>
      </Router>
      </div>
    )
  }
}

