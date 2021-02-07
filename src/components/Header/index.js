  
import React from 'react';
import Nav from '../Nav';
import './index.css'

function Header(props) {
    const { sections, currentSection, setCurrentSection } = props;
    return (
        <header>
             <h1>
                <a className="header" onClick={() => {setCurrentSection(sections[0])}}>
                                Kyle Morarity</a>
             </h1>
        <Nav
        sections={props.sections}
        currentSection={props.currentSection}
        setCurrentSection={props.setCurrentSection}
        ></Nav>
        </header>
    )
}

export default Header;