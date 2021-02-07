import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from "./components/Footer";
import Portfolio from  "./components/Portfolio";
import Projects from "./components/Project";
import Resume from "./components/Resume";

function App() {
  const [sections] = useState ([
    {
      name: "Kyle Morarity",
      component: About
    },
    {
      name: "About Me",
      component: About
    },
    {
      name: "Portfolio",
      component: Portfolio
    },
    {
      name: "Resume",
      component: Resume
    },
  ])

  const [currentSection, setCurrentSection] = useState(sections[0])
  return (
    <div className="flex-row">
      <Header
      sections={sections}
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}>
      </Header>
      <main>
        <About>
          {currentSection.component}
        </About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
