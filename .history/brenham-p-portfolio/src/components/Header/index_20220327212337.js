
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
        

        <div className="content"><Routes>
          <Route exact path="/" render={() => <Navigate to="/about" />} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={,} />
          <Route path="/contact" element={Contact}/>
          <Route path="/resume" element={Resume}/>
       </Routes> </div>
      </BrowserRouter>
    );
  }
}

export default Header;