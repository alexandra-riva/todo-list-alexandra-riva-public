import { saveTodos, loadTodos } from './storage';
import './styles.css';

let todos = loadTodos();

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <span>${todo}</span>
            <button data-index="${index}">Delete</button>
        `;
        todoList.appendChild(todoItem);
    });

    document.querySelectorAll('.todo-item button').forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            todos.splice(index, 1);
            saveTodos(todos);
            renderTodos();
        });
    });
}

document.getElementById('add-todo').addEventListener('click', () => {
    const title = document.getElementById('todo-title').value;
    if (title) {
        todos.push(title);
        saveTodos(todos);
        document.getElementById('todo-title').value = '';
        renderTodos();
    }
});

// Initial render of todos
renderTodos();
