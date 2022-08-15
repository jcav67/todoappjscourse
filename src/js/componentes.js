import {ToDo} from '../models/todo.class';

import {todoList} from '../index'
//HTML references

const divTodoList = document.querySelector('.todo-list');
const inputNewTask = document.querySelector('.new-todo');




export const crearTodoHtml = (todo) => {
    console.log(todo);
  const htmlTodo = `
    <li class="${ (todo.completed) ? 'completed':'' }" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completed) ? 'checked':'' }>
            <label>${todo.task}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

    const div = document.createElement('div');

    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
};


//Eventos
inputNewTask.addEventListener('keyup', (keyupEvent) =>{

    if(keyupEvent.keyCode === 13 && inputNewTask.value.length > 0){
        
        const newTask = new ToDo(inputNewTask.value);
        todoList.createToDo(newTask);
        crearTodoHtml( newTask);
        inputNewTask.value='';

    }
});

divTodoList.addEventListener('click', (clickEvent) =>{

    const elementName = clickEvent.target.localName;
    const todoElement = clickEvent.target.parentElement.parentElement;
    const todoId = todoElement.dataset.id;
    
    if( elementName.includes('input')){

        todoList.markAsCompleted(todoId);
        todoElement.classList.toggle('completed');
    }
    else if(elementName.includes('button')){

        todoList.removeToDo(todoId);
        divTodoList.removeChild(todoElement);
    }
    console.log(todoList);
});