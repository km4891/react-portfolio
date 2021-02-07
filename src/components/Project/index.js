import React from 'react';

function Project(props) {
    const projects = props.projects;

    return (
        <ul>
            {projects.map((project) => (
                <li key={project.id}>
                    <h1>
                        {project.name}
                    </h1>
                    <p>
                        {project.description}
                    </p>
                    <a href={project.applink} target="_blank">
                        Check out the project here!
                    </a>
                    <br/>
                    <a href={project.github} target="_blank">
                        Click here to view the project's Github repository.
                    </a>
                    <img src={require(`../../assets/${project.image}`).default}
                    />
                </li>
            ))}
        </ul>
    );
}

export default Project;