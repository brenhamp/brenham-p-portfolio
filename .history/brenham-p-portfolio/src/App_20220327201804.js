import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import Nav from './components/Nav';
// import About from './components/About';
// import Portfolio from './components/Portfolio';
// import ContactForm from './components/Contact';

function App() {
  // const [categories] = useState([
  //   {
  //     name: 'project',
  //     description: 'Projects I completed on my own',
  //   },
  //   { name: 'group_project', description: 'Collaborative projects' },
  // ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // const [contactSelected, setContactSelected] = useState(false);

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