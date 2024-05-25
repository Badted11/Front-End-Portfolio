import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const AddProject = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null
    });

    const { title, description, image } = formData;

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { title, description, image } = formData;
    
        if (!title || !description || !image) {
            alert('Please fill in all fields and select an image.');
            return;
        }
    
        try {
            
            const reader = new FileReader();
            reader.readAsDataURL(image);
    
            reader.onload = () => {
                const imageDataUrl = reader.result;
    
                const newProject = {
                    id: uuidv4(),
                    title,
                    description,
                    image: imageDataUrl // Store 
                };
    
                // Get local storage
                const existingProjects = JSON.parse(localStorage.getItem('projects')) || [];
    
                // Update projects
                const updatedProjects = [...existingProjects, newProject];
    
                // Save updated
                localStorage.setItem('projects', JSON.stringify(updatedProjects));
    
                console.log('Adding project:', newProject);
    
                // Clear
                setFormData({
                    title: '',
                    description: '',
                    image: null
                });
    
                alert('Project saved successfully!');
            };
    
            reader.onerror = () => {
                throw new Error('Failed to read the selected image.');
            };
        } catch (error) {
            console.error('Error saving project:', error);
            alert('Failed to save project.');
        }
    };
    


    return (
        <div>
            <h2>Add a new project</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter project title"
                        name="title"
                        value={title}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="file"
                        label="Choose project image"
                        custom
                        name="image"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Skills used in the project"
                        name="description"
                        value={description}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add project
                </Button>
            </Form>
        </div>
    );
};

export default AddProject;
