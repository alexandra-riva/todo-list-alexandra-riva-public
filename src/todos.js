export function addTodo(title) {
    const todoList = document.getElementById('todo-list');
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `<span>${title}</span>`;
    todoList.appendChild(todoItem);
}
