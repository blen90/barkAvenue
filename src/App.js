import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';


import About from './pages/About/About';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Services from './pages/Services/Services';
import Signup from './pages/Signup/Signup';

import Footer from './pages/components/Footer';
import Header from './pages/components/Header';
import Nav from './pages/components/Nav';

function App() {
  return (
    <>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <Nav />
          <div className="container">
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/Checkout">
              <Checkout/>
            </Route>
            <Route exact path="/Profile">
              <Profile/>
            </Route>
            <Route exact path="/Services">
              <Services/>
            </Route>
            <Route exact path="/Login">
              <Login/>
            </Route>
            <Route exact path="/Signup">
              <Signup/>
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
