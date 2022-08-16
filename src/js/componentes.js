import {ToDo} from '../models/todo.class';

import {todoList} from '../index'
//HTML references

const divTodoList   = document.querySelector('.todo-list');
const inputNewTask  = document.querySelector('.new-todo');
const btnCompleted  = document.querySelector('.clear-completed');
const ulFilters     = document.querySelector('.filters');
const anchorFilters = document.querySelectorAll('.filtrer');




export const crearTodoHtml = (todo) => {
    
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
    
});

btnCompleted.addEventListener('click', ()=>{
 
    todoList.deleteCompleted();
    console.log(todoList);
    for( let i = divTodoList.children.length-1; i >= 0; i--){

        const element= divTodoList.children[i];

       if( element.classList.contains('completed')){
        divTodoList.removeChild(element);
       }
    }
});

ulFilters.addEventListener('click', (ulClick) =>{
    
    const filter = ulClick.target.text;
    if( !filter) {return;}
    
    anchorFilters.forEach( elem => elem.classList.remove('selected'));
    ulClick.target.classList.add('selected');

    for( const element of divTodoList.children){
        element.classList.remove('hidden');
        const completedStatus = element.classList.contains('completed');
        
        switch(filter){

            case 'Pendientes':
                
                if( completedStatus ){
                    element.classList.add('hidden');
                }
                break;

            case 'Completados':
                if( !completedStatus ){
                    element.classList.add('hidden');
                }
                break;
        }
    }
});