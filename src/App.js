import './App.css';
import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}


export default App;
