import React from 'react';
import welder from "../../assets/welder.jpg"

function About() {
    return (
        <section style={{ margin: "0 auto", padding: "0 50px"  }}>
            <h1 id="about-me">About Me</h1>
            <div className="welder">
                <img src={welder} style={{ width: "50%" }} alt="Welder">

                </img>
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse purus magna, posuere semper pellentesque eu, egestas tincidunt nulla. Duis sollicitudin tincidunt justo, id commodo diam pretium pretium. Nunc eget urna maximus, tincidunt neque et, rutrum quam. Aliquam viverra pulvinar aliquam. Vivamus et dictum ante.
                </p>
            </div>
        </section>
    );
}

export default About;