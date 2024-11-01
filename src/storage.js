// Save todos to localStorage
export function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Load todos from localStorage
export function loadTodos() {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}
