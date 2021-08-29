import './styles.css';

import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

//console.log('todos', todoList.todos);

/*
setTimeout(() => {
    localStorage.removeItem('mi-key');
}, 1500);
*/