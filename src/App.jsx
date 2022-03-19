import React from 'react';

import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar';
import About from './components/about/About';
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Home />
        <NavBar />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;