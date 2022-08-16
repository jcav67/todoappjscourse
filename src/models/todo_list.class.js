//object Object representacion string de un objeto

import { ToDo } from "./todo.class";

export class ToDoList {

    constructor(){

        this.loadTaskFromLocalStorage();

    }

    createToDo(todo){

        this.toDos.push( todo );
        this.saveTaskToLocalStorage();
    }

    removeToDo( id ){
        this.toDos = this.toDos.filter( (toDo) => toDo.id != id);
        this.saveTaskToLocalStorage();
    }

    markAsCompleted( id ){

        this.toDos.forEach( (toDo) => {

            if(toDo.id == id){
                toDo.completed = !toDo.completed;
                this.saveTaskToLocalStorage();
                return;
            }

        });

    }

    deleteCompleted() {

        this.toDos = this.toDos.filter( (toDo) => !toDo.completed);
        this.saveTaskToLocalStorage();
        
    }

    saveTaskToLocalStorage(){

        localStorage.setItem('todo',JSON.stringify(this.toDos));
    }

    loadTaskFromLocalStorage(){

        this.toDos = (localStorage.getItem('todo')
        ? JSON.parse(localStorage.getItem('todo'))
        :[]);
        
        //forma larga this.toDos = this.toDos.map( (obj) => ToDo.fromJson(obj));
        //corta
        this.toDos = this.toDos.map( ToDo.fromJson);
        console.log(this.toDos)
    }
}