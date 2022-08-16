

export class ToDo{

    static fromJson ( {id,task,completed,created} ){

        const tempTodo = new ToDo(task);

        tempTodo.id         = id;
        tempTodo.task       = task;
        tempTodo.completed  = completed;
        tempTodo.created    = created;

        return tempTodo;
    }

    constructor( task ){

        this.task      = task;

        this.id         = new Date().getTime();
        this.completed = false;
        this.created     = new Date();
    }
}