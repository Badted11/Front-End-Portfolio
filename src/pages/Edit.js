import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        const projectToUpdate = projects.find(project => project.id === id);

        if (projectToUpdate) {
            setTitle(projectToUpdate.title);
            setDescription(projectToUpdate.description);
        }
    }, [id]);

    const handleSave = async () => {
        try {
            const projects = JSON.parse(localStorage.getItem('projects')) || [];
            const updatedProjects = projects.map(project => {
                if (project.id === id) {
                    return { ...project, title, description };
                }
                return project;
            });
            localStorage.setItem('projects', JSON.stringify(updatedProjects));
            console.log('Проект обновлен:', updatedProjects.find(project => project.id === id));
            navigate('/projects');
        } catch (error) {
            console.error('Error saving project:', error);
            alert('Failed to save project.');
        }
    };
    
    return (
        <div>
            <h2>Edit Project: {title}</h2>
            <label>Название проекта:</label>
            <br />
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ color: "black" }}
            />

            <br /><br />
            <label>Описание проекта:</label>
            <br />
            <textarea
                value={description}
                style={{ color: "black" }}
                onChange={(e) => setDescription(e.target.value)}
            />
            <br /> <br /> <br />
            <button onClick={handleSave}>Сохранить изменения</button>
        </div>
    );
};

export default Edit;
