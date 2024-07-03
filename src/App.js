
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <navbar/>
    <Router>
      <Header />
      <Routes>
        <Route path="/skills" component={Skills}/>
        <Route path="/about" component={About} />
      
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </Router>
    </main>
  );
}

export default App;

