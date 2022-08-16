import { ToDo,ToDoList } from './models/index';
import { crearTodoHtml } from './js/componentes';
// import { ToDoList } from './models/todo_list.class';
import './styles.css';


export const todoList = new ToDoList();
const task = new ToDo('aprender Javascript');
//task.completed = true;
todoList.createToDo(task)

crearTodoHtml(task)