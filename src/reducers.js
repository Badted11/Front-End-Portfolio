
const initialState = {
    projects: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_PROJECTS':
            return {
                ...state,
                projects: action.payload
            };
        case 'ADD_PROJECT':
            return {
                ...state,
                projects: [...state.projects, action.payload]
            };
        case 'DELETE_PROJECT':
            return {
                ...state,
                projects: state.projects.filter(project => project.id !== action.payload)
            };
        case 'UPDATE_PROJECT':
            return {
                ...state,
                projects: state.projects.map(project =>
                    project.id === action.payload.projectId ? action.payload.updatedProject : project
                )
            };
        default:
            return state;
    }
};

export default reducer;
