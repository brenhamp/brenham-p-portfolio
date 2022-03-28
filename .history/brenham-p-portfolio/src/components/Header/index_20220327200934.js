
import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Nav from "../../components/Nav";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
import Contact from '../../components/Contact';
import Resume from '../../components/Resume';


class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <Nav />
        </header>
        
<Routes>
        <div className="content">
          <Route exact path="/" render={() => <Navigate to="/about" />} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
        </div></Routes>
      </BrowserRouter>
    );
  }
}

export default Header;