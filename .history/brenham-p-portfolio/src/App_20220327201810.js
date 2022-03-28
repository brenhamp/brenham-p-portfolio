import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import Nav from './components/Nav';
// import About from './components/About';
// import Portfolio from './components/Portfolio';
// import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      {/* <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main> */}
      <Footer />
    </div>
  );
}

export default App;
