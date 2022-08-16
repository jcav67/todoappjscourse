

export class ToDoList {

    constructor(){

        this.todos=[];

    }

    createToDo(todo){

        this.todos.push( todo );
    }

    removeToDo( id ){
        this.todos = this.todos.filter( (toDo) => toDo.id != id);
    }

    markAsCompleted( id ){

        this.todos.forEach( (toDo) => {

            if(toDo.id == id){
                toDo.completed = !toDo.completed;
                return;
            }

        });

    }

    deleteCompleted() {

        this.todos = this.todos.filter( (toDo) => !toDo.completed);
        
    }
}