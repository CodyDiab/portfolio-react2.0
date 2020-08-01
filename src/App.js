import React from 'react';
// import About from './components/About'
import Projects from './components/Projects';
// import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles/index.css';

function App() {
  return (
    <div >
      <header className="header " >
        <h1>Here is the title, howdy yall</h1>
      </header>
      <div>
         {/* <About></About> */}
         <Projects></Projects>
         {/* <Contact></Contact> */}
         <Footer></Footer>
      </div>
     
    </div>
  );
}

export default App;
