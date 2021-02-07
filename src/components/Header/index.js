  
import React from 'react';
import Nav from '../Nav';

function Header(props) {
    return (
        <Nav
        sections={props.sections}
        currentSection={props.currentSection}
        setCurrentSection={props.setCurrentSection}
        ></Nav>
        
    )
}

export default Header;