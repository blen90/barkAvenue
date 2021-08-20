import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';


import About from './pages/About/About';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login.js';
import Profile from './pages/Profile/Profile';
// import Services from './pages/Services/Services.js';
import Signup from './pages/Signup/Signup.js';
import Contact from './pages/Contact/Contact.js';
import Reservation from './pages/Reservation/Reservation.js'
// import Cart from './pages/Cart/Cart.js'

import Footer from './pages/components/Footer';
import Header from './pages/components/Header.js';
import Nav from './pages/components/Nav.js';

class App extends Component {
  // const ['reservation, setReservation'] = useState("");
  constructor(){
    super()
    this.state = {
      to: "", from: "",
    }
    this.reservationInput = this.reservationInput.bind(this)
  }
  reservationInput(from, to){
    this.setState({
      to: to, 
      from: from,
    })
  }
  render() {
    console.log(this.state.to)
    console.log(this.state.from)
    return (
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <Nav />
          <div className="container">
             <Switch>
              {/* <Route exact path="/" component={About} /> */}
              <Route exact path="/" component={About} />
              {/* <Route exact path="/Services" component={Services} /> */}
              <Route exact path="/About" component={About} />
              <Route exact path="/Checkout" component={Checkout} />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/Reservation" render={props => <Reservation reservationInput = {this.reservationInput}/>} />
              {/* <Route exact path= "/Cart" render={props => <Cart to={this.state.to} from={this.state.from}/>} /> */}
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
