import React from 'react';
import { Header } from './header/header';
import { Portfolio } from './sections/portfolio';
import { About } from './sections/about';
import { Contact } from './sections/contact';
import { Footer } from './footer/footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Portfolio />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
