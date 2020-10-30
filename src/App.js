import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ContactState from "./Context/Contact/ContactState";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import AlertState from "./Context/Alert/AlertState";
import Alert from "./components/Layout/Alert";

const App = () => {
  return (
    <AlertState>
      <ContactState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AlertState>
  );
};

export default App;
