export class TodoList { 

    constructor() {
        //this.todos = [];
        this.cargarLocalStrorage();   
    }

    nuevoTodo (todo){
        this.todos.push(todo);
        this.guardarLocalStrorage();
    }

    eliminarTodo(id){
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStrorage();
    }

    marcarCompletado(id){
        for(const todo of this.todos){
            console.log(id, todo.id);
            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStrorage();
                break;
            }
        }

    }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStrorage();
    }

    guardarLocalStrorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStrorage(){
        this.todos = (localStorage.getItem('todo'))
                        ? JSON.parse(localStorage.getItem('todo'))
                        : [];

        /*
        if(localStorage.getItem('todo')){
            this.todos = JSON.parse(localStorage.getItem('todo'));
            console.log('cargarLocal', this.todos);
            console.log(typeof this.todos)
        }else{
            this.todos = [];
        }
        */

    }
}