import React, { useState } from 'react';
import Project from '../Project';

const projects = [
    {
        id: 1,
        name: 'Wantings',
        description: 'E-commerce site for vintage furniture',
        image: 'wantings.png',
        applink: 'coming soon',
        github: 'https://github.com/km4891/wantings'
    }
    ];
    function Portfolio() {
        return <Project projects={projects} />;
    }
    
    export default Portfolio;