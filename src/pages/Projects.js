import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Project from '../components/project/Project';

const Projects = () => {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Проекты</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <><Project
                            key={index}
                            title={project.title}
                            img={project.image}
                            index={project.id}
                            description={project.description}
                        />
                        </>
                    ))}
                </div>
                <Button variant="primary" as={Link} to="/add-project">Добавить проект</Button>
            </div>
        </main>
    );
};

export default Projects;