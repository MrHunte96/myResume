import React from 'react';
import NavigationBar from '../Components/NavigationBar';

import Home from './Home';
import About from './About';
import Projects from './Projects';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <NavigationBar />
        <Home />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;