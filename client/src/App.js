import React, { useState, useEffect } from 'react';
import { AppContext } from "./utils/AppContext"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import About from './pages/About/About';
import Login from './pages/Login/Login.js';
import Services from './pages/Services/Services.js';
import Signup from './pages/Signup/Signup.js';
import Contact from './pages/Contact/Contact.js';
import Reservation from './pages/Reservation/Reservation.js'
import Cart from './pages/Cart/Cart.js'

import Footer from './pages/components/Footer';
import Header from './pages/components/Header.js';
import Nav from './pages/components/Nav.js';

// Redux
import { Provider } from 'react-redux'
import store from "./store";

const App = () => {

  //Setting up state for context usage in the services page
  const [appState, setAppState] = useState({})
  const [renderReady, setRenderReady] = useState(false)

  // Do whatever is needed to initialize application state
  // Examples: check for logged in user
  const buildAppState = async () => {
    let fakeAppState = {
      pet: { id: "76wefdw76dwgdw7dgw7", name: "Oso" }
    }
    setAppState(fakeAppState)
    setRenderReady(true)
  }

  useEffect(() => {
    buildAppState()
  }, [])

  return (
    <>
      {renderReady === true && (
        <AppContext.Provider value={{ appState, setAppState }}>
          <Router>
            <Provider store={store}>
              <div className="flex-column justify-flex-start min-100-vh">
                <Header />
                <Nav />
                <div className="container">
                  <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/Services" component={Services} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Reservation" component={Reservation} />
                    <Route exact path="/Cart" component={Cart} />
                    <Route exact path="/Contact" component={Contact} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Signup" component={Signup} />
                  </Switch>
                </div>
                <Footer />
              </div>
            </Provider>
          </Router>
        </AppContext.Provider>
      )}
    </>
  );
}

export default App;
