import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Delete = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        const projectToDelete = projects.find(project => project.id === id);

        setProject(projectToDelete);
    }, [id]);

    const handleDelete = () => {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];

        const updatedProjects = projects.filter(project => project.id !== id);

        localStorage.setItem('projects', JSON.stringify(updatedProjects));

        console.log('Проект удален:', project);

        navigate('/projects');
    };

    if (!project) {
        return <div>Project not found!</div>;
    }

    return (
        <div>
            <h2>Delete Project: {project.title}</h2>
            <br />
            <button onClick={handleDelete}>Удалить проект</button>
        </div>
    );
};

export default Delete;
