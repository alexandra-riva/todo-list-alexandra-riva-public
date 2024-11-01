let projects = ['Default Project'];


export function addProject(name) {
    if (!projects.includes(name)) {
        projects.push(name);
    }
}


export function getProjects() {
    return projects;
}
