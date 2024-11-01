let projects = ['Default Project']; // Default project

// Add a new project
export function addProject(name) {
    if (!projects.includes(name)) {
        projects.push(name);
    }
}

// Get all projects
export function getProjects() {
    return projects;
}
