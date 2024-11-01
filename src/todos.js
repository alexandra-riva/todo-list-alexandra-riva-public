export function addTodo(todo) {
    const todoList = document.getElementById('todo-list');
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `<span>${todo.title}</span>`; 
    todoList.appendChild(todoItem);
}
