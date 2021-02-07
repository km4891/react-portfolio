import React from 'react';

function Footer() {
    return (
        <a
        class="btn"
        href="https://github.com/km4891" 
        target="_blank"
        aria-label="Checkout my work on Github">
            <img src={require(`../../assets/github.png`).default}>
            </img>
        </a>
    )
}

export default Footer;