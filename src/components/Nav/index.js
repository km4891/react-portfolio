import React from 'react';

function Nav(props) {
    const { sections, currentSection, setCurrentSection,  } = props;
    return (
        <nav>
            <ul className="flex-row">
                {sections.map((section) => (
                    <li className={`mx-1 ${currentSection.name === section.name && 'navActive'
                }`}
                key={section.name}>
                    <a className={`${currentSection.name === section.name && 'navActive'}`}
                    onClick={() => {
                        setCurrentSection(section);
                    }
                    }
                    ></a>
                </li>
                )
                )}
            </ul>
        </nav>
    );
}

export default Nav;