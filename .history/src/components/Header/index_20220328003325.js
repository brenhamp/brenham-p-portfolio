
import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Nav from "../Nav";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from '../Contact';
import Resume from '../Resume';


class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <Nav />
        </header>
        

        <div className="content"><Routes>
          <Route exact path="/" render={() => <Navigate to="/about" />} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/resume" element={<Resume/>}/>
       </Routes> </div>
      </BrowserRouter>
    );
  }
}

export default Header;