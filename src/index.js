import { ToDo,ToDoList } from './models/index';
import { crearTodoHtml } from './js/componentes';
// import { ToDoList } from './models/todo_list.class';
import './styles.css';


export const todoList = new ToDoList();

// todoList.toDos.forEach( (toDo) => crearTodoHtml(toDo)); completo
//corto
todoList.toDos.forEach(crearTodoHtml);