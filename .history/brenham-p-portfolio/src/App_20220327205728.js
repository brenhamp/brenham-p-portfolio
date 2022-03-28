import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Route exact path="/" component={Home} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      <Footer />
    </div>
  );
}

export default App;
