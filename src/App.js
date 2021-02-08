import React, { useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume'

function App() {
  const [sections] = useState([
    {
      name: 'About Me',
      component: <About />
    },
    {
      name: 'Portfolio',
      component: <Portfolio />
    },
    {
      name: 'Contact',
      component: <Contact />
    },
    {
      name: 'Resume',
      component: <Resume />
    }
  ])

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div>
      <Header
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}>
      </Header>
      <main>
        {currentSection.component}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;