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
    },
    {
        id: 1,
        name: 'Find the Vibe',
        description: 'Music search engine through Spotify API',
        image: 'vibe.png',
        applink: 'coming soon',
        github: 'https://github.com/km4891/find-the-vibe'
    },
    
    ];
    function Portfolio() {
        return <Project projects={projects} />;
    }
    
    export default Portfolio;