import React, {useState} from 'react';
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles/index.css';

function App() {
  const [ currentPage, handlePageChange] = useState('About')

  const renderPage = () => {
    switch(currentPage) {
      case 'Contact':
        return <Contact/>;
      case 'Projects':
        return <Projects/>;
      case 'About' :
        return <About/>;
      default:
        return <About/>
    }
  }
  return (
    <div >
      <header className="header " >
      <img className='logo' src={require("./assets/logo-2.svg")} alt="logo"></img>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
      </header>
      <div>
        {renderPage()}
         {/* <About></About> 
         <Projects></Projects>
         <Contact></Contact> */}
         <Footer></Footer>
      </div>
     
    </div>
  );
}

export default App;
