

export class ToDoList {

    constructor(){

        this.todos=[];

    }

    createToDo(todo){

        this.todos.push( todo );
    }

    removeToDo( id ){
        this.todos.pop(id);
    }

    markAsCompleted( id ){

    }

    deleteCompleted() {
        
    }
}