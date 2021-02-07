import React from 'react';

function Nav(props) {
    const { sections, currentSection, setCurrentSection, projects } = props;
    return (
        <nav>
            <ul className="flex-row">
                {sections.map((section) => (
                    <li className={`mx-1 ${currentSection.name === section + " "
                }`}
                key={section.name}>
                    <a onClick={() => {
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