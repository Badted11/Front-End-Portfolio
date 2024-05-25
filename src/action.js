
export const loadProjects = () => {
    return {
        type: 'LOAD_PROJECTS',
        payload: JSON.parse(localStorage.getItem('projects')) || []
    };
};

export const addProject = (project) => {
    return {
        type: 'ADD_PROJECT',
        payload: project
    };
};

export const deleteProject = (projectId) => {
    return {
        type: 'DELETE_PROJECT',
        payload: projectId
    };
};

export const updateProject = (projectId, updatedProject) => {
    return {
        type: 'UPDATE_PROJECT',
        payload: {
            projectId,
            updatedProject
        }
    };
};
