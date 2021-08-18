import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


import About from './pages/About/About';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login.js';
import Profile from './pages/Profile/Profile';
import Services from './pages/Services/Services.js';
import Signup from './pages/Signup/Signup.js';
import Contact from './pages/Contact/Contact.js'

import Footer from './pages/components/Footer';
import Header from './pages/components/Header.js';
import Nav from './pages/components/Nav.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <Nav />
          <div className="container">
             <Switch>
              {/* <Route exact path="/" component={About} /> */}
              <Route exact path="/" component={About} />
              <Route exact path="/Checkout" component={Checkout} />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/Services" component={Services} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Signup" component={Signup} /> 
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
