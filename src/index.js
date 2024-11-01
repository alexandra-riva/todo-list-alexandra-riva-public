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
            <span>${todo.title}</span>
            <span>${todo.description}</span>
            <span>${todo.dueDate}</span>
            <span>${todo.priority}</span>
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
    const description = document.getElementById('todo-description').value; 
    const dueDate = document.getElementById('todo-due-date').value; 
    const priority = document.getElementById('todo-priority').value; 

    if (title) {
        const todo = { title, description, dueDate, priority };
        todos.push(todo);
        saveTodos(todos);
        document.getElementById('todo-title').value = '';
        document.getElementById('todo-description').value = ''; 
        document.getElementById('todo-due-date').value = ''; 
        document.getElementById('todo-priority').value = '';
        renderTodos();
    }
});


renderTodos();
