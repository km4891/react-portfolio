import React from 'react';
import './index.css'

function Footer() {
    return (
        <footer>
            <ul className="flex-row">
                <li>
                    <a
                        class="btn"
                        href="https://github.com/km4891"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Check out my work on Github">
                        <img
                            src={require(`../../assets/github.png`).default}
                            alt="Github Icon">
                        </img>
                    </a>
                </li>
                </ul>
        </footer>

    )
}

export default Footer;