import React from "react";
import {BrowserRouter as Router, Switch, Route, Link,} from "react-router-dom";
import Home from '../Home'
import About from "../Pages/About";
import Header from './header';
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import {SliderData} from "./SliderData";
import Contact from "../Pages/Contact";
import Certificate from "../Pages/Certificate";
import Chairman from "../Pages/chairman";
function _Router() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/Certificate">
            <Certificate />
          </Route>
          <Route exact path="/Chairman">
            <Chairman />
          </Route>
        </Switch>
      </div>
        
    </Router>
  );
}
export default _Router;